const a={comentario:"",xpath:"//*[text()='Saiba mais']/ancestor::div[contains(@class, 'card-oportunidade')]"},o={posclick:"",comentario:"",xpath:"//div[contains(@class, 'item-vaga-conteudo')]",processadores:[{nome:"padraoTitulo",tipo:"",de:"",para:""}]},t={posclick:!0,comentario:"",xpath:"(//app-textos-vaga)[1]",processadores:[{nome:"",tipo:"Replace",de:"Descrição da Vaga",para:""},{nome:"padraoDescricao",tipo:"",de:"",para:""}]},e={posclick:"",comentario:"",xpath:"//div[contains(@class, 'card-oportunidade')]//span[contains(@class, 'oportunidade-local')]",processadores:[{nome:"",tipo:"SplitFirst",de:"-",para:""},{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},s={posclick:"",comentario:"",xpath:"//div[contains(@class, 'card-oportunidade')]//span[contains(@class, 'oportunidade-local')]",processadores:[{nome:"",tipo:"RegexMatch",de:"-.+",para:""},{nome:"",tipo:"Replace",de:"-",para:""}]},c={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""}]},i={tipo:"click",comentario:"",xpath:"//*[text()='Saiba mais']/ancestor::div[contains(@class, 'card-oportunidade')]//a[contains(@class, 'btn')]"},p={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},n={tipo:"intercept",comentario:"",parametro:"&size=12&page=1",rota_principal:"https://candidate.cnnkt.io/api/v1/_search/opportunities?query",script:""},r={posclick:"",comentario:"",xpath:"//*[contains(@class, 'oportunidade-quantidade') and not(ancestor::*[@hidden])]",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},d={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},l={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},m={root:a,titulo:o,descricao:t,cidade:e,estado:s,tipo:c,url_detalhe:i,salario:p,paginacao:n,total_vagas:r,total_vagas_site:d,total_anuncios_site:l};export{e as cidade,m as default,t as descricao,s as estado,n as paginacao,a as root,p as salario,c as tipo,o as titulo,l as total_anuncios_site,r as total_vagas,d as total_vagas_site,i as url_detalhe};
