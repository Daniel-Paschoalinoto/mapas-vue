const a={comentario:"Caso no nome da empresa tenha termos genéricos como RH e a quantidade de páginas for alta demais omita o termo. Exemplo NONNA RH, o url deve ser https://www.catho.com.br/vagas/nonna/",xpath:"//*[@id='search-result']//li"},o={posclick:"",comentario:"",xpath:"//*[@id='search-result']/ul/li/article/article/header/div",processadores:[{nome:"padraoTitulo",tipo:"",de:"",para:""},{nome:"",tipo:"RegexMatch",de:".+Nome da empresa",para:""},{nome:"",tipo:"RegexReplace",de:"Nome da empresa",para:""}]},e={posclick:!0,comentario:"",xpath:"//*[@class='job-description']/text( )",processadores:[{nome:"padraoDescricao",tipo:"",de:"",para:""}]},t={posclick:"",comentario:"",xpath:"//*[@id='search-result']//button[1]/a/text( )",processadores:[{nome:"",tipo:"SplitFirst",de:"-",para:""},{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},s={posclick:"",comentario:"",xpath:"//*[@id='search-result']//button[1]/a/text( )",processadores:[{nome:"",tipo:"RegexMatch",de:"-.+",para:""},{nome:"",tipo:"Replace",de:"-",para:""},{nome:"",tipo:"SplitFirst",de:"(",para:""}]},r={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""}]},p={tipo:"href",comentario:"",xpath:"//*[@id='search-result']//h2/a"},i={posclick:"",comentario:"",xpath:"//div[contains(@class,'salary')]",processadores:[{nome:"",tipo:"RegexReplace",de:" a ",para:"&"},{nome:"",tipo:"SplitFirst",de:"&",para:""},{nome:"",tipo:"SplitLast",de:"$",para:""}]},c={tipo:"",comentario:"",parametro:"&page=2",rota_principal:"https://www.catho.com.br/vagas/grupo-souza-lima/?q=Grupo%20Souza%20Lima",script:""},n={posclick:"",comentario:"",xpath:"//*[@id='search-result']//button[1]/a/text( )",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},d={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},l={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},m={root:a,titulo:o,descricao:e,cidade:t,estado:s,tipo:r,url_detalhe:p,salario:i,paginacao:c,total_vagas:n,total_vagas_site:d,total_anuncios_site:l};export{t as cidade,m as default,e as descricao,s as estado,c as paginacao,a as root,i as salario,r as tipo,o as titulo,l as total_anuncios_site,n as total_vagas,d as total_vagas_site,p as url_detalhe};
