// Executando jquery
// $('.well')
// $('.well').length
// $('.well').text('Texto para todos os elementos DOM que contenham a classe well')

// $('#area-01')
// $('#area-01').length
// $('#area-01').text('Texto exclusivo para o elemento DOM cujo ID seja area-01')

function minhaFuncao1()
{
	$('#area-01').css({
		color: '#ff0000',
		textTransform: 'uppercase',
		width: 600
	});
};

function minhaFuncao2()
{
	$('#area-02').empty(); // Remove todos os elementos filhos daquele cujo ID seja area-2

	var alunos = ['Aluno 01', 'Aluno 02', 'Aluno 03', 'Aluno 04', 'Aluno 05'];
	
	// Itera ao longo do array inserindo seus elementos ao final daquele cujo ID seja area-2
	$.each(alunos, function(index, value) {
		$('#area-02').append(value);
	});
};

function minhaFuncao3()
{
	$('#area-02').empty(); // Remove todos os elementos filhos daquele cujo ID seja area-2

	var alunos = [
		{
			nome: 'Aluno 01',
			idade: 11
		},
		{
			nome: 'Aluno 02',
			idade: 22
		},
		{
			nome: 'Aluno 03',
			idade: 33
		},
		{
			nome: 'Aluno 04',
			idade: 44
		},
		{
			nome: 'Aluno 05',
			idade: 55
		}
	];
	
	for(i=0; i<5; i++)
	{
		console.log(alunos[i]);
	}

	// Itera ao longo do array inserindo seus elementos ao final daquele cujo ID seja area-2
	var list = $("#area-02").append('<ul></ul>').find('ul');
	$.each(alunos, function(index, value) {
    	list.append('<li>' + value.nome + ' - ' + value.idade + '</li>');
	});
};
