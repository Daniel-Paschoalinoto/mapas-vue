const o={comentario:"",xpath:"//*[@id='positionsPartial']//li"},a={posclick:"",comentario:"",xpath:"//*[@id='positionsPartial']//a/text( )[1]",processadores:[{nome:"padraoTitulo",tipo:"",de:"",para:""}]},t={posclick:!0,comentario:"",xpath:"(//*[contains(., 'DESCRIÇÃO DA VAGA')]/following-sibling::div)[1]",processadores:[{nome:"padraoDescricao",tipo:"",de:"",para:""}]},e={posclick:"",comentario:"Em caso de filtro não inserir o processador 'Trabalho Remoto'",xpath:"//*[@id='positionsPartial']//span",processadores:[{nome:"",tipo:"SplitFirst",de:"-",para:""},{nome:"",tipo:"RegexReplace",de:"Trabalho Remoto",para:"Cidade da Empresa"},{nome:"",tipo:"",de:"",para:""}]},i={posclick:"",comentario:"",xpath:"//*[@id='positionsPartial']//span",processadores:[{nome:"",tipo:"SplitLast",de:"-",para:""},{nome:"",tipo:"",de:"",para:""}]},s={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""}]},p={tipo:"href",comentario:"",xpath:"//*[@id='positionsPartial']//a"},r={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},c={tipo:"",comentario:"",parametro:"",rota_principal:"",script:""},n={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},d={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},l={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},m={root:o,titulo:a,descricao:t,cidade:e,estado:i,tipo:s,url_detalhe:p,salario:r,paginacao:c,total_vagas:n,total_vagas_site:d,total_anuncios_site:l};export{e as cidade,m as default,t as descricao,i as estado,c as paginacao,o as root,r as salario,s as tipo,a as titulo,l as total_anuncios_site,n as total_vagas,d as total_vagas_site,p as url_detalhe};
