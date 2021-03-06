export async function loadHTML(path) {
    var template = ""
    await (async() => {
        var response = await fetch(path);
        switch (response.status) {
            // status "OK"
            case 200:
                template = await response.text();

                console.log(template);
                break;
                // status "Not Found"
            case 404:
                console.log('Not Found');
                break;
        }
    })();
    //return template;
}

export function validForm() {

    const schema = {
        nome_do_contato: value => ((value && value.length > 0 && value != "") ? true : false),
        nome_da_empresa: value => ((value && value.length > 0 && value != "") ? true : false),
        email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        telefone: value => ((value && value.length == 15 && value != "") ? true : false),
        estado: value => ((value && value.length > 0 && value != "") ? true : false),
        cidade: value => ((value && value.length > 0 && value != "") ? true : false),
        ramo_de_atividade: value => ((value && value.length > 0 && value != "") ? true : false),
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
        title: \"${this.customFields.nome_da_empresa}\",\r\n  
        filledFields: [\r\n      {fieldId: \"nome_do_contato\", fieldValue: \"${this.customFields.nome_do_contato}\"},\r\n            
        {fieldId: \"nome_da_empresa\", fieldValue: \"${this.customFields.nome_da_empresa}\"},\r\n            
        {fieldId: \"email\", fieldValue: \"${this.customFields.email}\"},\r\n            
        {fieldId: \"telefone\", fieldValue: \"${this.customFields.telefone}\"},\r\n            
        {fieldId: \"estado\", fieldValue: \"${this.customFields.estado}\"},\r\n            
        {fieldId: \"cidade\", fieldValue: \"${this.customFields.cidade}\"},\r\n            
        {fieldId: \"ramo_de_atividade\", fieldValue: \"${this.customFields.ramo_de_atividade}\"},\r\n    ]\r\n  }) 
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
    v = v.replace(/\D/g, "") //Remove tudo o que n??o ?? d??gito
    v = v.replace(/^(\d\d)(\d)/g, "($1) $2") //Coloca par??nteses em volta dos dois primeiros d??gitos
    v = v.replace(/(\d{5})(\d)/, "$1-$2") //Coloca h??fen entre o quarto e o quinto d??gitos
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