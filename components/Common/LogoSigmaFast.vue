<template>
    <img 
        :class="`[${size}px] h-[${size}px]`"
        src="../../assets/LogoSigmaFast.png"
        alt="Logo SigmaFast"
    />

</template>

<script setup>
   defineProps({
    size: String
   })
</script>