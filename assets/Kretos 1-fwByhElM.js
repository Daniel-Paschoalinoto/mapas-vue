const a={comentario:"",xpath:"//*[contains(@class,'listagem-vagas')]//a"},o={posclick:"",comentario:"",xpath:"//*[contains(@class,'nome-vaga')]",processadores:[{nome:"padraoTitulo",tipo:"",de:"",para:""}]},t={posclick:!0,comentario:"",xpath:"(//*[contains(@class,'titulos-detalhes')])[1]/following-sibling::ul[1]",processadores:[{nome:"padraoDescricao",tipo:"",de:"",para:""}]},s={posclick:"",comentario:"",xpath:"//*[contains(@class,'cidade-vaga')]",processadores:[{nome:"",tipo:"SplitFirst",de:"-",para:""},{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},e={posclick:"",comentario:"",xpath:"//*[contains(@class,'cidade-vaga')]",processadores:[{nome:"",tipo:"RegexMatch",de:"-.+",para:""},{nome:"",tipo:"Replace",de:"-",para:""}]},c={posclick:"",comentario:"",xpath:"//*[@class='tipo-vaga']",processadores:[{nome:"padraoTipo",tipo:"",de:"",para:""}]},i={tipo:"href",comentario:"",xpath:"//*[contains(@class,'listagem-vagas')]//a"},p={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},r={tipo:"",comentario:"Empresa não utiliza paginação.",parametro:"",rota_principal:"",script:""},n={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},d={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},l={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},m={root:a,titulo:o,descricao:t,cidade:s,estado:e,tipo:c,url_detalhe:i,salario:p,paginacao:r,total_vagas:n,total_vagas_site:d,total_anuncios_site:l};export{s as cidade,m as default,t as descricao,e as estado,r as paginacao,a as root,p as salario,c as tipo,o as titulo,l as total_anuncios_site,n as total_vagas,d as total_vagas_site,i as url_detalhe};
