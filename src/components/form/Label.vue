<template>
    <label :for="forInput">{{ value }}</label>
</template>

<script>
export default {
    props: [
        'value',
        'forInput'
    ],
}
</script>