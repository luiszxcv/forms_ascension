import { checkForm, send, telefone, validForm, loadHTML } from '/src/js/functions_globals.js';
import { options_markse } from '/src/js/variables.js';
var form = "";
await loadHTML("https://forms.ascensiondigital.com.br/src/forms/markse_marcas.html").then(res => {
    form = res;
});

Vue.component('v-select', VueSelect.VueSelect);

Vue.component('modal-ascension', {
    props: ['button_text', "redirect_url", "formid", "headline"],
    data: function() {
        return {
            form: form,
            options: options_markse,
            customFields: {},
            errors: [],
            validForm: validForm,
            send: send,
            telefone: telefone,
            checkForm: checkForm,
        }
    },
    methods: {},
    mounted() {

    },
    watch: {
        customFields: {
            handler(val) {
                if (val.telefone) {
                    val.telefone = this.telefone(val.telefone);
                }
            },
            deep: true
        }
    },
    template: `
    <div>
      <div class="section_form_ascension">
        <input class="modal_form_ascension-btn" type="checkbox" id="modal_form_ascension-btn" name="modal_form_ascension-btn"/>
        <label for="modal_form_ascension-btn" id="label-whatsapp-fixed-icon"></label>	
      	<div class="modal_form_ascension">		
	      	<div class="modal_form_ascension-wrap padding-horizontal--48">
          ` + form + `
            <img class="scrool_ascension"  src="https://forms.ascensiondigital.com.br/src/img/scroll-icon-png-22.jpg" alt="scrool">
	      	</div>			          		
      	</div>	
	    </div>
    </div>
  `
})

Vue.component('form-ascension', {
    props: ['button_text', "redirect_url", "formid", "headline"],
    data: function() {
        return {
            form: form,
            options: options_markse,
            customFields: {},
            errors: [],
            validForm: validForm,
            send: send,
            telefone: telefone,
            checkForm: checkForm,
        }
    },
    methods: {},
    mounted() {

    },
    watch: {
        customFields: {
            handler(val) {
                if (val.telefone) {
                    val.telefone = this.telefone(val.telefone);
                }
            },
            deep: true
        }
    },
    template: `
        <div>
            <div id="html-form-ascension" >
            ` + form + `
            </div>
        </div>`
})

Vue.component('modal-form-ascension', {
    props: ['button_text'],
    data: function() {
        return {}
    },
    mounted() {},
    watch: {},
    template: `
    <div>
      <div class="section_form_ascension">
      	<input class="modal_form_ascension-btn" type="checkbox" id="modal_form_ascension-btn" name="modal_form_ascension-btn"/>
      	<label for="modal_form_ascension-btn">
          {{button_text}}
          &nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg></label> 		
	    </div>
    </div>
    `
})


Vue.component('modal-fixed-modal-ascension', {
    data: function() {
        return {}
    },
    methods: {},
    mounted() {

    },
    watch: {},
    template: `
    <div>
      <div class="section_form_ascension">
      	<input style=""class="modal_form_ascension-btn" type="checkbox" id="modal_form_ascension-btn" name="modal_form_ascension-btn"/>
      	<label for="modal_form_ascension-btn" id="label-whatsapp-fixed-icon"><svg viewBox="0 0 32 32" class="whatsapp-ico_fixed_ascension"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path></svg></label>	
	    </div>
    </div>
  `
});

if (document.getElementById("form_markse_marcas")) {
    new Vue({
        el: '#form_markse_marcas',
        data: {}
    })
}