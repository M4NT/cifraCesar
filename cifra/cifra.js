// Função para cifrar uma mensagem usando a cifra de César
function cifrarCesar(texto, chave) {
    let resultado = '';
  
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];
      
      // Verifica se o caractere é uma letra do alfabeto
      if (char.match(/[a-zA-Z]/)) {
        // Obtém o código Unicode da letra
        let codigo = texto.charCodeAt(i);
  
        // Verifica se a letra é maiúscula ou minúscula
        let maiuscula = char === char.toUpperCase();
        
        // Aplica o deslocamento com base na chave
        codigo = (codigo - (maiuscula ? 65 : 97) + chave) % 26;
  
        // Certifica-se de que o resultado seja positivo
        if (codigo < 0) {
          codigo += 26;
        }
  
        // Converte o código de volta para um caractere e concatena ao resultado
        resultado += String.fromCharCode(codigo + (maiuscula ? 65 : 97));
      } else {
        // Se o caractere não for uma letra, mantém inalterado
        resultado += char;
      }
    }
  
    return resultado;
  }
  
  // Função para decifrar uma mensagem cifrada usando a cifra de César
  function decifrarCesar(textoCifrado, chave) {
    // A decifração é o oposto da cifração, portanto, usamos uma chave negativa
    return cifrarCesar(textoCifrado, -chave);
  }
  
  // Exemplo de uso
  const mensagemOriginal = "o yan é 10";
  const chave = 3; // Chave de deslocamento
  
  const mensagemCifrada = cifrarCesar(mensagemOriginal, chave);
  console.log("Mensagem cifrada:", mensagemCifrada);
  
  const mensagemDecifrada = decifrarCesar(mensagemCifrada, chave);
  console.log("Mensagem decifrada:", mensagemDecifrada);
  