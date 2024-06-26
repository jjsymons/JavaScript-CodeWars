/*

https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript


Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

*/

function DNAStrand(dna){
    var output = '';
    if(dna === ''){
        return output;
    } else {
        const swap = dna.split('');
        for(let i = 0; i < swap.length ; i++){
            switch(swap[i]){
                case 'A':
                    output = output.concat('T');
                    break;
                case 'T':
                    output = output.concat('A');
                    break;
                case 'G':
                    output = output.concat('C');
                    break;
                case 'C':
                    output = output.concat('G');
                    break;
                default:
                    output = output.concat('A');
                    break;
            }
        }
    }
    return output;
  }

  console.log(DNAStrand('AAAA'))