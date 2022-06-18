var stylesForm = `   
body{
  background-color: #fff;
  background-image: url('https://assets.codepen.io/1462889/back-page.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 101%;
}


[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
  position: absolute;
  left: -9999px;
}
.modal_form_ascension-btn:checked + label,
.modal_form_ascension-btn:not(:checked) + label{
  position: relative;
  font-weight: 700;
  font-size: 15px;
  line-height: 2;
  height: 50px;
  transition: all 200ms linear;
  border-radius: 4px;
  width: 240px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
    -ms-flex-item-align: center;
    align-self: center;
  border: none;
  cursor: pointer;
  background-color:#27D165;
  color: white;
  box-shadow: 0 12px 35px 0 rgba(16,39,112,.25);
}
.modal_form_ascension-btn:not(:checked) + label:hover{
  background-color: white;
  color: #27D165;
}
.modal_form_ascension-btn:checked + label .uil,
.modal_form_ascension-btn:not(:checked) + label .uil{
  margin-left: 10px;
  font-size: 18px;
}
.modal_form_ascension-btn:checked + label:after,
.modal_form_ascension-btn:not(:checked) + label:after{
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 110;
  width: 40px;
  border-radius: 3px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  background-color: white;
  color: #27D165;
  content: 'x'; 
  box-shadow: 0 12px 25px 0 rgba(16,39,112,.25);
  transition: all 200ms linear;
  opacity: 0;
  pointer-events: none;
  transform: translateY(20px);
}
.modal_form_ascension-btn:checked + label:hover:after,
.modal_form_ascension-btn:not(:checked) + label:hover:after{
  background-color: #27D165;
  color: white;
}
.modal_form_ascension-btn:checked + label:after{
  transition: opacity 300ms 300ms ease, transform 300ms 300ms ease, background-color 250ms linear, color 250ms linear;
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.modal_form_ascension{
  position: fixed;
  display: block;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow-x: hidden;
  background-color: rgba(31,32,41,.75);
  pointer-events: none;
  opacity: 0;
  transition: opacity 250ms 700ms ease;
}
.modal_form_ascension-btn:checked ~ .modal_form_ascension{
  pointer-events: auto;
  opacity: 1;
  transition: all 300ms ease-in-out;
}
.modal_form_ascension-wrap {
  position: relative;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  padding-bottom: 20px;
  background-color: #fff;
    -ms-flex-item-align: center;
    align-self: center;
    box-shadow: 0 12px 25px 0 rgba(199,175,189,.25);
  opacity: 0;
  transform: scale(0.6);
  transition: opacity 250ms 250ms ease, transform 300ms 250ms ease;
}
@media screen and (max-width: 500px) {
  .modal_form_ascension-wrap {
    width: calc(100% - 40px);
    padding-bottom: 15px;
  }
  .modal_form_ascension-wrap p {
    margin:0px !important;
    font-size:12px;
  }
}

.padding-top--64 {
  padding-top: 64px;
}
.padding-top--24 {
  padding-top: 24px;
}
.padding-top--48 {
  padding-top: 48px;
}
.padding-bottom--24 {
  padding-bottom: 24px;
}
.padding-horizontal--48 {
  padding: 48px;
}
.padding-bottom--15 {
  padding-bottom: 15px;
}

.flex-justifyContent--center {
  -ms-flex-pack: center;
  justify-content: center;
}

span {
    display: block;
    font-size: 20px;
    line-height: 28px;
    color: #1a1f36;
}
label {
    margin-bottom: 10px;
}
.reset-pass a,label {
    font-size: 14px;
    font-weight: 600;
    display: block;
}
.reset-pass > a {
    text-align: right;
    margin-bottom: 10px;
}
.grid--50-50 {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
}

.field input {
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    width: 100%;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    outline-color: #27D165;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
    rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, 
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

input[type="submit"] {
    background-color: #27D165;
    box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, #27d165 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
}
input[type="submit"]:hover {
  background-color:white;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, #27d1654d 0px 0px 25px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 5px, rgb(0 0 0 / 0%) 0px 0px 0px 5px, rgb(60 66 87 / 8%) 0px 2px 5px 7px;
  color: #27D165;
  font-weight: 600;
  cursor: pointer;
  transition:300ms;
}
.field-checkbox input {
    width: 20px;
    height: 15px;
    margin-right: 5px; 
    box-shadow: unset;
    min-height: unset;
}
.field-checkbox label {
    display: flex;
    align-items: center;
    margin: 0;
}
`;
var styleSheet = document.createElement("style")
styleSheet.setAttribute('rel', 'stylesheet');
styleSheet.setAttribute('type', 'text/css');
styleSheet.innerText = stylesForm
document.head.appendChild(styleSheet)

var formulario = `
<div class="formbg-outer">
  <div class="formbg">
    <div class="formbg-inner">
      <span class="padding-bottom--15">Preencha o formulário para continuar</span>
      <form id="stripe-login">
        <div class="field padding-bottom--24">
          <label for="email">Email</label>
          <input type="email" name="email">
        </div>
        <div class="field padding-bottom--24">
          <label for="email">Email</label>
          <input type="email" name="email">
        </div>
        <div class="field padding-bottom--24">
          <label for="email">Email</label>
          <input type="email" name="email">
        </div>
        <div class="field padding-bottom--24">
          <label for="email">Email</label>
          <input type="email" name="email">
        </div>
        <div class="field padding-bottom--24">
          <label for="email">Email</label>
          <input type="email" name="email">
        </div>
        <div class="field padding-bottom--24">
          <div class="">
            <label for="password">Password</label>
          </div>
          <input type="password" name="password">
        </div>
        <div class="field padding-bottom--24">
          <input type="submit" name="submit" value="Ir ao WhatsApp">
        </div>
      </form>
      <div style="">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16"> <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/> <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/> </svg>
        <p>Suas informações estão seguras.</p>
      </div>
    </div>
  </div>
</div>`

/*Vue.component('form-ascension', {
    data: function() {
        return {
            form: formulario,
        }
    },
    mounted() {
        //this.form = formulario;
    },
    template: `
    <div id="html-form-ascension" v-html="form">
    </div>
`
})*/

Vue.component('modal-form-ascension', {
    data: function() {
        return {
            form: formulario,
        }
    },
    mounted() {

    },
    template: `
  <div class="modal-html-form-ascension">
      <div class="section_form_ascension">	
        <div class="modal_form_ascension">		
          <div class="modal_form_ascension-wrap" v-html="form">	
         
          </div>			    		
        </div>	
      </div>
  </div>
`
})

/*Vue.component('btn-modal-ascension', {
    data: function() {
        return {}
    },
    mounted() {
        var styles = `   
        .modal_form_ascension-btn:checked ~ .modal_form_ascension{
          pointer-events: auto;
          opacity: 1;
          transition: all 300ms ease-in-out;
        }
        .modal_form_ascension-btn:checked ~ .modal_form_ascension .modal_form_ascension-wrap{
          opacity: 1;
          transform: scale(1);
          transition: opacity 250ms 500ms ease, transform 350ms 500ms ease;
        }


        .modal_form_ascension-btn:checked ~ .logo img {
          filter: brightness(100%);
          transition: all 250ms linear;
        }
        .whatsapp-ico_ascension{
          width:25px;
          fill: #1b9646;
        }
        `;
        var styleSheet = document.createElement("style")
        styleSheet.setAttribute('rel', 'stylesheet');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)
    },
    template: `
    <div id="button-html-modal-ascension">
      <div class="section_form-ascension">
        <input class="modal_form_ascension-btn" type="checkbox" id="modal_form_ascension-btn" name="modal_form_ascension-btn"/>
        <label for="modal_form_ascension-btn"><svg viewBox="0 0 32 32" class="whatsapp-ico_ascension"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path></svg> 
        WhatsApp</label> 				    		
	    </div>
    </div>
    `
})*/


/*Vue.component('btn-fixed-modal-ascension', {
    data: function() {
        return {}
    },
    mounted() {
        var styles = `

    .whatsapp-ico_fixed_ascension{
      fill: white;
      width: 50px;
      height: 50px;
      padding: 3px;
      background-color: #4dc247;
      border-radius: 50%;
      box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
      position: fixed;
      bottom: 20px;
      right : 20px;
      z-index: 10;
    }

    .whatsapp-ico_fixed_ascension:hover{
      box-shadow: 2px 2px 11px rgba(0,0,0,0.7);
    }

    .whatsapp-ico_fixed_ascension{
      cursor: pointer;
    }

    .whatsapp-ico_fixed_ascension:hover{
      color: red;
    }

    .whatsapp-ico_fixed_ascension:active{
      color: blue;
    }
    `;
        var styleSheet = document.createElement("style")
        styleSheet.setAttribute('rel', 'stylesheet');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)
    },
    template: `
    <div id="button-fixed-html-modal-ascension">
        <input type="checkbox" id="modal_form_ascension-btn" name="modal_form_ascension-btn"/>
        <label for="modal_form_ascension-btn" id="modal_form_ascension-btn"><svg viewBox="0 0 32 32" class="whatsapp-ico_fixed_ascension"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path></svg></label>  
    </div>
    `
})*/

new Vue({
    el: '#form_ascension'
})