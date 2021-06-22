import ready from './ready'

export default {
    attach: function(Vue, Component, callback) {
        let extendObj = Vue.extend(Component)
        let target = new extendObj({el: document.createElement('div')})
        if(document.body) {
            this.appendChild(target)
        } else {
            ready.ready(()=>{ this.appendChild(target) })
        } 
        this.mixin(Vue, target, callback)
    },

    appendChild: function(target) {
        document.body.appendChild(target.$el)
    },

    mixin: function(Vue, target, callback) {
        Vue.mixin({
            created: function () {
                this.$iui = this.$iui || {}
                callback(this.$iui, target)
            }
        })
    }
}
