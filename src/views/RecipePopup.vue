<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
            <button class="popup-close" @click="TogglePopup()"> Close Recipe </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['TogglePopup']
}
</script>


<style>

.popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: url('../images/backgroundMain.jpg') no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;


}


</style>