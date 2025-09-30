import { Injectable, signal } from '@angular/core';
import { PedagogicalAxis } from '../models/proposal.model';

@Injectable({
  providedIn: 'root',
})
export class ProposalService {
  private pedagogicalAxes = signal<PedagogicalAxis[]>([
    {
      title: 'Corpo e Movimento',
      pedagogicalIntent: 'Valorizar o corpo como instrumento de expressão, vitalidade e cooperação. Desenvolver habilidades motoras, consciência corporal e espírito coletivo por meio de práticas lúdicas, artísticas e esportivas.',
      experiences: [
        { name: 'Circuito Acrobático Circense', description: 'Vivências de equilíbrio, acrobacias, cooperação e ludicidade.' },
        { name: 'Práticas Esportivas Coletivas', description: 'Futebol cooperativo, queimada, mini-vôlei, basquete lúdico, handebol infantil, corridas de revezamento, jogos cooperativos...' },
        { name: 'Práticas Esportivas Urbanas', description: 'Skate infantil, patins/patinete, slackline, circuitos de bike...' },
      ],
      icon: 'M13 10V3.25a.75.75 0 00-1.5 0V10H4.75a.75.75 0 000 1.5h6.5V18a.75.75 0 001.5 0v-6.5h6.5a.75.75 0 000-1.5H13z',
      bgColorClass: 'bg-creme'
    },
    {
      title: 'Arte, Cultura e Expressão',
      pedagogicalIntent: 'Cultivar a imaginação, a oralidade e a expressão simbólica, valorizando a diversidade cultural e o encantamento artístico.',
      experiences: [
        { name: 'Teatro', description: 'Expressão cênica, improvisação e criação de personagens.' },
        { name: 'Dança e Percussão', description: 'Integração de ritmo, música e movimento, ampliando a expressão coletiva.' },
        { name: 'Contação de Histórias', description: 'Narrativas orais que encantam e fortalecem a imaginação.' },
        { name: 'Brincadeiras Musicais', description: 'Valorização de tradições, cantos, ritmos e brincadeiras brasileiras.' },
        { name: 'Improvisação e RPG', description: 'Liberdade criativa em movimento, escuta corporal e criação de narrativas coletivas.' },
      ],
      icon: 'M12 18.25a.75.75 0 00.75-.75V11h4.5a.75.75 0 000-1.5h-4.5V6.31l3.72 3.72a.75.75 0 001.06-1.06l-5-5a.75.75 0 00-1.06 0l-5 5a.75.75 0 101.06 1.06L11.25 6.31V9.5h-4.5a.75.75 0 000 1.5h4.5v6.5a.75.75 0 00.75.75z',
      bgColorClass: 'bg-lavanda'
    },
    {
      title: 'Manualidades',
      pedagogicalIntent: 'Fortalecer a experiência sensorial, a autonomia e o prazer do fazer manual. Desenvolver coordenação fina e criatividade.',
      experiences: [
        { name: 'Marcenaria Criativa', description: 'Experimentação com madeira e construção de objetos com ferramentas seguras.' },
        { name: 'Pães Artesanais', description: 'Experiência manual e coletiva, do amassar à partilha.' },
        { name: 'Origami', description: 'Delicadeza, concentração e criação manual por meio da dobra.' },
        { name: 'Modelagem 3D', description: 'Criação em novas linguagens, conectando o físico ao digital.' },
      ],
      icon: 'M10.75 5.5a.75.75 0 00-1.5 0v2.553L6.628 6.09a.75.75 0 00-1.036 1.09l2.75 2.6-2.75 2.6a.75.75 0 101.036 1.09L9.25 11.447V14.5a.75.75 0 001.5 0v-2.553l2.622 2.463a.75.75 0 101.036-1.09l-2.75-2.6 2.75-2.6a.75.75 0 00-1.036-1.09L10.75 8.053V5.5z',
      bgColorClass: 'bg-hortencia'
    },
    {
      title: 'Jogos, Lógica e Estratégia',
      pedagogicalIntent: 'Estimular raciocínio lógico, tomada de decisão, cooperação e criatividade, explorando jogos analógicos, digitais e narrativos.',
      experiences: [
        { name: 'Criação de Jogos de Tabuleiro', description: 'Concepção, prototipagem e jogabilidade.' },
        { name: 'Criação de Jogos Digitais', description: 'Lógica de programação criativa, storytelling e interatividade.' },
        { name: 'Xadrez para a Vida', description: 'Desenvolvimento de pensamento estratégico e paciência.' },
        { name: 'Robótica Sustentável', description: 'Montagem, lógica e resolução de problemas de forma lúdica.' },
      ],
      icon: 'M4.75 6.5a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.5a.75.75 0 01-.75-.75zm0 5a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.5a.75.75 0 01-.75-.75zm0 5a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H5.5a.75.75 0 01-.75-.75z',
      bgColorClass: 'bg-menta'
    },
    {
      title: 'Cuidar de si, do outro e do mundo',
      pedagogicalIntent: 'Favorecer o autoconhecimento, o equilíbrio emocional e a visão de futuro, integrando competências de vida e bem-estar.',
      experiences: [
        { name: 'Mindfulness e Yoga', description: 'Práticas de atenção plena, respiração e consciência corporal.' },
        { name: 'Empreendedorismo', description: 'Vivências de criação, liderança e cooperação.' },
        { name: 'Educação Financeira', description: 'Introdução lúdica a conceitos de planejamento e cuidado com recursos.' },
      ],
      icon: 'M11.646 2.354a.5.5 0 010 .708L5.707 9h6.793a.5.5 0 01.353.854l-4.5 4.5a.5.5 0 01-.707-.708L11.293 10H4.5a.5.5 0 01-.353-.854l4.5-4.5a.5.5 0 01.707.708L5.207 8h6.939l-4-4a.5.5 0 01.708-.708l4.5 4.5a.5.5 0 010 .708L8.207 13H15.5a.5.5 0 01.353.854l-4.5 4.5a.5.5 0 01-.707-.708l4.093-4.093H8.5a.5.5 0 01-.353-.854l4.5-4.5a.5.5 0 01.707-.708L8.707 12H16.5a.5.5 0 01.353.854l-4.5 4.5a.5.5 0 01-.708-.708L15.293 13H8.5a.5.5 0 010-1h6.793l-3.647-3.646a.5.5 0 01.708-.708l4.5 4.5z',
      bgColorClass: 'bg-creme'
    },
    {
      title: 'Cidade e Cultura Viva',
      pedagogicalIntent: 'Valorizar a cidade como espaço educador e a cultura como expressão de pertencimento, memória e diversidade.',
      experiences: [
        { name: 'Cozinhas e Infâncias', description: 'Receitas ligadas à cultura e às memórias familiares (Educação Alimentar e Ambiental).' },
        { name: 'Projeto CidadeVamos', description: 'Cartografias afetivas e mapeamento de espaços pelo entorno.' },
        { name: 'Fotografia', description: 'Registro do olhar da criança e produção de sentido pela imagem.' },
        { name: 'Cultura Urbana', description: 'Unindo esporte, cultura e música (roda de capoeira, parkour, danças de rua...).' },
      ],
      icon: 'M8.5 4.75a.75.75 0 01.75.75v13a.75.75 0 01-1.5 0v-13a.75.75 0 01.75-.75zM15.5 4.75a.75.75 0 01.75.75v13a.75.75 0 01-1.5 0v-13a.75.75 0 01.75-.75zM4.75 8.5a.75.75 0 01.75-.75h13a.75.75 0 010 1.5h-13a.75.75 0 01-.75-.75zM4.75 15.5a.75.75 0 01.75-.75h13a.75.75 0 010 1.5h-13a.75.75 0 01-.75-.75z',
      bgColorClass: 'bg-lavanda'
    }
  ]);

  getPedagogicalAxes() {
    return this.pedagogicalAxes();
  }
}