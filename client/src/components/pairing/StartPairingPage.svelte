<script>
    import { createEventDispatcher, onMount, onDestroy } from 'svelte';
    import { step, protocols, reset, DeviceFound } from './PairingStore.svelte';
    import { socketManager } from '../../managers/socketManager';
    import { tr } from '../../utils/i18nHelper';
    import LoadingAnimation from '../animations/LoadingAnimation.svelte';
    import CancelButton from '../UI/buttons/CancelButton.svelte';
    import DeviceService from '../../services/deviceService';
    import type { Device } from '../../../types/deviceType';
    import type { Protocols } from '../../../types/protocols';

    const dispatch = createEventDispatcher();

    let timeout: NodeJS.Timeout;

    /* enter this function if timeout is reached*/
    function failureDevicePaired() {
        step.update(() => 'FailurePairingPage');
    }

    /*enter this function if the pairing is successful*/
    function successDevicePaired(data: Device) {
        DeviceFound.data = data;
        console.log('Device founded : ', data);
        step.update(() => 'SuccessPairingPage');
    }

    /*when creating the component, we launch the pairing procedure and listen to the responses from the back*/
    onMount(async () => {
        /* request to start the pairing procedure */
        const a = await DeviceService.launchPair();
        protocols.set(a);

        const allFailed = Object.keys(a)
            .map((key) => a[key])
            .every((protocol) => protocol.status === 'failed');

        console.log('teststst', a);
        if (allFailed) {
            failureDevicePaired();
        }

        socketManager.registerGlobalListener(
            'deviceCreated',
            successDevicePaired
        );
        // Wait 120s an object was paired otherwise we go into the failure page
        timeout = setTimeout(failureDevicePaired, 120000);
    });

    /*when the component is destroyed, we stop the timeout and delete the listener on which we were listening*/
    onDestroy(() => {
        clearTimeout(timeout);
        socketManager.removeListener('deviceCreated', successDevicePaired);
    });
</script>

<div class="flex flex-col space-y-6 justify-center items-center">
    <p class="text-lg uppercase text-center">
        {tr('pairing.start.information')}
    </p>
    <LoadingAnimation />
    <CancelButton
        on:click={() => {
            dispatch('cancel');
            reset();
        }}
    />
</div>
