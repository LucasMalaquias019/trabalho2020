class Cliente{
    constructor(){
        this.clientes = localStorage.getItem('tbClientes') === null
        ?[]
        : JSON.parse(localStorage.getItem('tbClientes'))
    }
    salva(cliente){
        if(document.getElementById('codigo').getAttribute('disabled')==='disabled'){
            this.apaga(cliente.codigo)
        }
        this.clientes.push(cliente) // adiciona um novo elemento ao array
        localStorage.setItem('tbClientes',JSON.stringify(this.clientes))
        alert('Cliente salvo com sucesso!')
    }
    apaga (codigo){
        let index =this.clientes.findIndex(cliente=>cliente.codigo==codigo)
        this.clientes.splice(index,1)
        localStorage.setItem('tbClientes',JSON.stringify(this.clientes))
        cliente.atualiza()
    }
    edita(cliente){
        
        document.getElementById('email').value =cliente.email
        document.getElementById('senha').value
        
    }
    lista(){
        const listagem =this.clientes.map((cliente)=>(

        
        `<tr>
        
        <td>${cliente.email}</td>
        <td>${cliente.senha}</td>
      
            
            <td>
           <button id='apagar' onClick='cliente.apaga(${cliente.codigo})'>
                🗑️
            </button>
            <button id='editar' onClick='cliente.edita(${JSON.stringify(cliente)})'>
                ✏️
            </button>
            </td>
        </tr>
    `
    )).join("")
    return (`<table border ='1' class=paleBlueRows>
    <br>
    <caption><h1>Relação dos Clientes</h1></caption>
    <thead>
    
    <th>E-mail</th>
    <th>Senha</th>
    
    <th>Opções</th>
    
    </thead>
    <tbody>${listagem}</tbody>
    </table>
    `)
        
    }
    atualiza(){
        document.getElementById('listagem').innerHTML=cliente.lista()
    }
   
}


const cliente = new Cliente()
document.getElementById('salvar').onclick =function(){
   const registro = {
      
       email : document.getElementById('email').value,
      senha : document.getElementById('senha').value
      

   }
   
   cliente.salva(registro)
}
window.onload =function(){
    cliente.atualiza()

}






