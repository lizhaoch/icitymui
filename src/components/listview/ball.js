export default {
    prevent(evt) {
        evt.preventDefault()
    },

    start() {
        document.querySelector('body').addEventListener('touchmove', this.prevent, { passive: false })
    },

    stop() {
        document.querySelector('body').removeEventListener('touchmove', this.prevent)
    }
} 