export const form_markse_marcas = `<div class="formbg-outer-ascension">
    <div class="formbg">
        <div class="formbg-inner">
            <h3 class="headline_form_ascension">{{headline}}</h3>
            <form id="form_ascension_submit" method="POST" ref="form_ascension_submit" @submit="checkForm()" action="#">
                <label class="field padding-bottom--24 pp-input-wrap pp-error pp-input-md">
                        <span class="pp-label-text">*Seu nome</span>
                        <input name="Nome do contato" placeholder="Jorge da Silva"  id="nome_do_contato" v-model="customFields.nome_do_contato"  type="text" tabindex="0" class="pp-input" required>
                </label>
                <label class="field padding-bottom--24 pp-input-wrap pp-input-md"><span class="pp-label-text">*Nome da marca</span>
                        <input name="Nome da marca" placeholder="Nome do seu negócio"  id="nome_da_empresa"   v-model="customFields.nome_da_empresa" type="text" tabindex="0" class="pp-input"  required>
                </label>
                <label class="field padding-bottom--24 pp-input-wrap pp-input-md">
                        <span class="pp-label-text">*Seu melhor email</span>
                        <input
                            name="Email" id="email" v-model="customFields.email" placeholder="email@example.com" type="email" tabindex="0"
                            class="pp-input" required>
                </label>
                <label class="field padding-bottom--24 pp-input-wrap pp-input-md"><span class="pp-label-text">Contato</span>
                        <div class="markdown">
                            <p>Informe o seu WhatsApp
                            </p>
                        </div>
                        <div class="intl-tel-input  allow-dropdown">
                            <input tabindex="0" maxlength="15" type="text" placeholder="(__) _____-____"  autocomplete="off" class="pp-input" name="WhatsApp" v-model="customFields.telefone" id="telefone" required>
                        </div>
                    </label>

                <label class="field padding-bottom--24 pp-input-wrap pp-input-md"><span class="pp-label-text">*Estado</span>
                        <div class="pp-custom-select">
                            <select name="Estado" id="estado" v-model="customFields.estado" tabindex="0" class=" pp-select"  required>
                                <option value=""></option>
                                <option value="AC">AC</option>
                                <option value="AL">AL</option>
                                <option value="AP">AP</option>
                                <option value="AM">AM</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="DF">DF</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MT">MT</option>
                                <option value="MS">MS</option>
                                <option value="MG">MG</option>
                                <option value="PA">PA</option>
                                <option value="PB">PB</option>
                                <option value="PR">PR</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RS">RS</option>
                                <option value="RO">RO</option>
                                <option value="RR">RR</option>
                                <option value="SC">SC</option>
                                <option value="SP">SP</option>
                                <option value="SE">SE</option>
                                <option value="TO">TO</option>
                            </select>
                        </div>
                </label>
                <label class="field padding-bottom--24 pp-input-wrap pp-input-md">
                        <span class="pp-label-text">*Cidade</span>
                        <input name="Cidade" placeholder="São Paulo"  id="cidade" v-model="customFields.cidade" type="text" tabindex="0"
                            class="pp-input"  required>
                </label>
                <!--<label class="field padding-bottom--24 pp-input-wrap pp-input-md"><span class="pp-label-text">*Área
                            de atuação</span>
                        <div class="vv-custom-select">
                            <v-select :options="options" name="Área de atuacão" class="v-select_ascension" id="ramo_de_atividade" :required="!customFields.ramo_de_atividade" v-model="customFields.ramo_de_atividade"></v-select>
                        </div>
                </label>-->

                <label class="field padding-bottom--24 pp-input-wrap pp-input-md"><span class="pp-label-text">*Área de atuacão</span>
                        <input name="Ramo de atividade" placeholder="Ex: Empresa de consultoria"  id="ramo_de_atividade"   v-model="customFields.ramo_de_atividade" type="text" tabindex="0" class="pp-input"  required>
                </label>
                <div v-if="errors.length">
                    <span>Por favor, revise o(s) campo(s):</span>
                    <span v-for="error in errors">{{ error.name}}, </span>
                </div>

                <div class="field padding-bottom--24">
                    <button class="submitAscension-form" @click.prevent="checkForm()" name="submit">
                                {{button_text}}
                                &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                </svg>
                            </button>

                </div>
            </form>
        </div>
        <div style="display:flex;">
            <p>Suas informações estão seguras.</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi
                            bi-shield-check" viewBox="0 0 16 16">
                <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                <path d="M10.854     5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0     1-.708 0l-1.5-1.5a.5.5 0 1 1     .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0     1 .708 0z" /> </svg>

        </div>
    </div>
</div>
`;