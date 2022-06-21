export async function loadHTML(path) {
    var html = "";
    await fetch(path)
        .then(response => response.text())
        .then(text => { html = text; });
    return html
}

export function validForm() {

    const schema = {
        nome_do_contato: value => ((value && value.length > 0 && value != "") ? true : false),
        nome_da_empresa: value => ((value && value.length > 0 && value != "") ? true : false),
        email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        telefone: value => ((value && value.length == 15 && value != "") ? true : false),
        estado: value => ((value && value.length > 0 && value != "") ? true : false),
        cidade: value => ((value && value.length > 0 && value != "") ? true : false),
        rea_de_atua_o: value => ((value && value.value && value.value.length > 0) ? true : false),
        //age: value => parseInt(value) === Number(value) && value >= 18,
    };

    const validate = (object, schema) => Object
        .keys(schema)
        .filter(function(key) {
            let inputError = document.getElementById(key);
            document.querySelectorAll('[id=' + key + ']').forEach(currentItem => {
                if (currentItem.classList.contains('errors_ascension')) {
                    currentItem.classList.remove("errors_ascension");
                }
            });

            return !schema[key](object[key])
        })
        .map(function(key) {
            let inputError = document.getElementById(key);
            let inputErrorName = inputError.getAttribute("name")
            return { message: `${inputErrorName} pode estar vazio ou com erro de escrita.`, id: key, name: inputErrorName };
        });

    var response = false;
    this.errors = [];
    this.errors = validate(this.customFields, schema);
    if (this.errors.length > 0) {
        response = false;
        for (const error of this.errors) {
            if (!document.getElementById(error.id).classList.contains('errors_ascension')) {
                //document.getElementById(error.id).classList.add("errors_ascension");
                document.querySelectorAll('[id=' + error.id + ']').forEach(currentItem => {
                    currentItem.classList.add("errors_ascension");
                });
            }
        }
    } else {
        response = true;
    }
    return response;
};

export async function send() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
        query: `mutation {\r\n  submitPublicForm(input: {\r\n    formId: \"${this.formid}\",\r\n    
        filledFields: [\r\n      {fieldId: \"nome_do_contato\", fieldValue: \"${this.customFields.nome_do_contato}\"},\r\n            
        {fieldId: \"nome_da_empresa\", fieldValue: \"${this.customFields.nome_da_empresa}\"},\r\n            
        {fieldId: \"email\", fieldValue: \"${this.customFields.email}\"},\r\n            
        {fieldId: \"telefone\", fieldValue: \"${this.customFields.telefone}\"},\r\n            
        {fieldId: \"estado\", fieldValue: \"${this.customFields.estado}\"},\r\n            
        {fieldId: \"cidade\", fieldValue: \"${this.customFields.cidade}\"},\r\n            
        {fieldId: \"rea_de_atua_o\", fieldValue: \"${this.customFields.rea_de_atua_o.label}\"},\r\n    ]\r\n  }) 
        {\r\n    repoItem {\r\n      id\r\n      title\r\n    }\r\n  }\r\n}`,
        variables: {}
    })
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: graphql,
        redirect: 'follow'
    };
    let res = false;
    await fetch("https://app.pipefy.com/public_api", requestOptions)
        .then(async response => { await response.text() })
        .then(result => {
            res = true;
        })
        .catch(error => {
            res = false;
        });
    return res;
};

export function telefone(v) {
    v = v.replace(/\D/g, "") //Remove tudo o que não é dígito
    v = v.replace(/^(\d\d)(\d)/g, "($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d{5})(\d)/, "$1-$2") //Coloca hífen entre o quarto e o quinto dígitos
    return v
}

export async function checkForm() {
    if (await this.validForm()) {
        if (await this.send()) {
            this.customFields = {}

            let a = document.createElement('a');
            a.target = '_blank';
            a.href = decodeURIComponent(this.redirect_url);
            a.click();
            //window.location.href = this.redirect_url;
            //window.open(this.redirect_url, "_blank");
        } else {
            console.log("error send")
        }
    } else {
        //error
    }

}