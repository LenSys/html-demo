<template>
    <div class="absolute backdrop inset-0" @click.self="closeModel">
        <div class="modal-dialog relative mx-auto w-1/2 bg-white p-10" :class="[theme]">
            <slot></slot>
            <div class="mt-10 text-center">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<style>
.backdrop {
    background-color: rgba(0,0,0,0.5);
}

.modal-dialog {
    margin-top: 25%;
}

.modal-dialog.sale {
    background-color: #101726;
}

.modal-dialog.sale h3 {
    color: white;
}

.modal-dialog.sale p {
    color: white;
}
</style>

<script>
export default {
  name: "ModalDialog",
  props: [
    'theme'
  ],
  methods: {
    closeModel() {
        this.$emit('closeModal');
    }
  }
}
</script>