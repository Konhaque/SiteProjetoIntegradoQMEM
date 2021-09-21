export default class Alunos{

   
    constructor(cpf){
        this.getAluno(cpf);
    }

    getAluno(cpf){
        const ref = firebase.database().ref("Alunos");
        let existe = false;
        ref.once('value', (snapshot) =>{
            snapshot.forEach((childSnapshot) =>{
                if(childSnapshot.child("CPF DO ALUNO").val().includes(cpf)){
                    existe = true;
                    let aluno = {nome: childSnapshot.child("NOME DO ALUNO").val(),
                            email: childSnapshot.child("E-MAIL DO ALUNO").val(),
                            telefone: childSnapshot.child("TELEFONE DO ALUNO").val(),
                            curso: childSnapshot.child("NOME DO CURSO").val(),
                            turma: childSnapshot.child("OFERTA DE TURMA").val()};         
                }
            });
           
        });
 
    }

    setError(){
        Swal.fire({
            icon: 'error',
            title: 'Aluno não encontrado',
            text: 'Este canal é apenas para estudantes dos cursos do Programa Qualifica Mais Emprega Mais'
        });
    }

    confirmarAluno(){

    }

}