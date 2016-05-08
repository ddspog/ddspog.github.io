// Declare RegisterApp (used on html tag of index.html)
var regApp = angular.module('RegisterApp', ['ui.router', 'ngSanitize']);

/* Directive declaring a form-title, showing title of registers forms */
regApp.directive('formTitle', function() {
  return {
    restrict: 'A',
    scope: {
      item: '=item'
    },
	link: function(scope, element, attr){
		element.addClass('mdl-card__title');
		componentHandler.upgradeDom();
	},		
    templateUrl: 'directives/form-title.html'
  };
});

/* Directive declaring a form-tabs, with tabs buttons to change page look */
regApp.directive('formTabs', ['$timeout', function($timeout) {
  return {
    restrict: 'A',
	transclude: true,
    scope: {
      item: '=item'
    },
	link: function(scope, element, attr){
		element.addClass('site-tabs mdl-tabs is-upgraded mdl-js-tabs mdl-js-ripple-effect');
		$timeout(function(){
			$("#tab1").delay(500).addClass("is-active");
			componentHandler.upgradeDom();
		}, 1500);
	},		
    templateUrl: 'directives/form-tabs.html'
  };
}]);

/* Directive declaring a layout showing only a card */
regApp.directive('layoutOneCard', function() {
  return {
    restrict: 'A',
	transclude: true,
    scope: {
      item: '=item'
    },
	link: function(scope, element, attr){
		element.addClass('site-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100');
		componentHandler.upgradeDom();
	},		
    templateUrl: 'directives/layout-one-card.html'
  };
});

regApp.directive('panelType', ['$sce', function($sce) {
  return {
    restrict: 'A',
	transclude: true,
    scope: {
      item: '=item'
    },
	link: function(scope, element, attr){
		element.addClass('mdl-tabs__panel is-active');
		
		scope.next = function() {
			$("#tab1").removeClass("is-active");
			$("#choose-panel").removeClass("is-active");
			$("#tab2").delay(500).addClass("is-active");
			$("#terms-panel").delay(500).addClass("is-active");
		};
		componentHandler.upgradeDom();
	},		
    templateUrl: 'directives/panel-type.html'
  };
}]);

regApp.directive('panelTerms', ['$sce', function($sce) {
  return {
    restrict: 'A',
	transclude: true,
    scope: {
      item: '=item'
    },
	link: function(scope, element, attr){
		element.addClass('mdl-tabs__panel');
		
		scope.terms_accepted = false;
		scope.terms_next_pressed = false;
		
		scope.next = function() {
			if(scope.terms_accepted){
				scope.terms_next_pressed = false;
				$("#tab2").removeClass("is-active");
				$("#terms-panel").removeClass("is-active");
				$("#tab3").delay(500).addClass("is-active");
				$("#user-data-panel").delay(500).addClass("is-active");
			} else {
				scope.terms_next_pressed = true;
			}	
		};
		
		scope.previous = function() {
			$("#tab2").removeClass("is-active");
			$("#terms-panel").removeClass("is-active");
			$("#tab1").delay(500).addClass("is-active");
			$("#choose-panel").delay(500).addClass("is-active");
		};
		
		scope.change = function(){
			componentHandler.upgradeDom();
		};
		componentHandler.upgradeDom();
	},	
    templateUrl: 'directives/panel-terms.html'
  };
}]);

regApp.directive('panelUser', ['$sce', function($sce) {
  return {
    restrict: 'A',
	transclude: true,
    scope: {
      item: '=item'
    },
	link: function(scope, element, attr){
		element.addClass('mdl-tabs__panel');
		
		scope.previous = function() {
			$("#tab3").removeClass("is-active");
			$("#user-data-panel").removeClass("is-active");
			$("#tab2").delay(500).addClass("is-active");
			$("#terms-panel").delay(500).addClass("is-active");
		};
		componentHandler.upgradeDom();
	},
    templateUrl: 'directives/panel-user.html'
  };
}]);

regApp.controller('RegisterController', function($scope, $timeout) {
	$scope.mainText = {
		logo: 'GetCake'
	};
	
	$scope.titleText = {
		icon: 'account_circle',
		text: 'Registro de usuário'
	};
	
	$scope.tabbarText = {
		tabs: [
			{ id: 'tab1', text: '1. Tipo de Usuário' },
			{ id: 'tab2', text: '2. Termos e Condições' },
			{ id: 'tab3', text: '3. Confirmar Dados' }
		]
	};
	
	$scope.paneltypeText = {
		content: '<h4>Escolha o tipo de usuário que você é.</h4><br><p>Confeiteiro se você deseja anunciar que faz encomendas.<br>Cliente se você quer encomendar bolos e avaliá-los.</p>',
		type1: 'Confeiteiro',
		type2: 'Cliente',
		nextLbl: 'Próximo',
		previousLbl: 'Cancelar'
	};
	
	$scope.paneltermsText = {
		text: 'Precisamos que você concorde com os termos e condições abaixo.',
		terms: 'TERMOS DE SERVIÇO ---- VISÃO GERAL Esse site é operado por GetCake. Em todo o site, os termos “nós”, “nos” e “nosso” se referem à GetCake. GetCake oferece esse site, incluindo toda a informação, ferramentas e serviços disponíveis deste site para você, o usuário, condicionada a sua aceitação de todos os termos, condições, políticas e avisos declarados aqui. Ao visitar nosso site e/ou comprar algo de nós, você se envolve em nosso “Serviço” e concorda estar vinculado pelos seguintes termos e condições (“Termos de Serviço”, “Termos”), incluindo aqueles termos e condições e políticas adicionais referenciados neste documento e/ou disponíveis por hyperlink. Esses Termos de Serviço se aplicam para todos os usuários do site, incluindo, sem limitação, os usuários que são navegadores, fornecedores, clientes, comerciantes, e/ou contribuidores de conteúdo. Por favor, leia esses Termos de Serviço cuidadosamente antes de acessar ou usar o nosso site. Ao acessar ou usar qualquer parte do site, você concorda estar vinculado por esses Termos de Serviço. Se você não concorda com todos os termos e condições desse acordo, então você não pode acessar o site ou usar quaisquer serviços. Se esses Termos de Serviço são considerados uma oferta, a aceitação é expressamente limitada a esses Termos de Serviço. Quaisquer novos recursos ou ferramentas que são adicionados à loja atual devem também estar sujeitas aos Termos de Serviço. Você pode revisar a versão mais atual dos Termos de Serviço a qualquer momento nessa página. Reservamos o direito de atualizar, alterar ou trocar qualquer parte desses Termos de Serviço ao publicar atualizações e/ou alterações ao nosso site. É sua responsabilidade verificar essa página periodicamente para alterações. Seu uso contínuo de ou acesso ao site após a publicação de quaisquer alterações, constitui aceitação dessas alterações. Nossa loja é hospedada em Shopify Inc. Eles nos fornecem uma plataforma de e-commerce online que nos permite vender nossos produtos e serviços para você. SEÇÃO 1 - TERMOS DA LOJA ONLINE Ao concordar com esses Termos de Serviço, você afirma que você tem pelo menos a maioridade em seu estado ou província de residência, ou que você tem a maioridade em seu estado ou província de residência e você nos deu seu consentimento para permitir que qualquer um dos seus dependentes menores de idade usem esse site. Você não deve usar nossos produtos para qualquer fim ilegal ou não autorizado nem pode, no uso do Serviço, violar quaisquer leis em sua jurisdição (incluindo, mas não limitado a leis de direitos autorais). Você não deve transmitir quaisquer vermes ou vírus ou qualquer código de natureza destrutiva. Uma quebra ou violação de quaisquer dos Termos vai resultar em uma terminação imediata dos seus Serviços. SEÇÃO 2 - CONDIÇÕES GERAIS Reservamos o direito de recusar o serviço a qualquer um por qualquer motivo a qualquer momento. Você entende que o seu conteúdo (não incluindo informações de cartão de crédito), pode ser transferido sem criptografia e envolver (a) transmissões por várias redes; e (b) alterações para se adaptar e se adequar às exigências técnicas de conexão de redes ou dispositivos. Informações de cartão de crédito são sempre criptografadas durante a transferência entre redes. Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte do Serviço, uso do Serviço, ou acesso ao Serviço ou qualquer contato no site através do qual o serviço é fornecido, sem permissão expressa escrita por nós. Os títulos usados nesse acordo são incluídos para conveniência apenas e não vão limitar ou, caso contrário, afetar esses Termos. SEÇÃO 3 - PRECISÃO, INTEGRIDADE E ATUALIDADE DAS INFORMAÇÕES Não somos responsáveis se as informações disponibilizadas nesse site não são precisas, completas ou atuais. O material nesse site é fornecido para informações gerais apenas e não deveria ser confiado ou usado como a única base para fazer decisões sem consultar fontes de informações primárias, mais precisas, mais completas ou mais atuais. Qualquer confiança no material desse site é por sua conta e risco. Esse site pode conter certas informações históricas. Informações históricas, necessariamente, não são atuais e são fornecidas para sua referência apenas. Reservamos o direito de modificar os conteúdos desse site a qualquer momento, mas nós não temos obrigação de atualizar quaisquer informações em nosso site. Você concorda que é sua responsabilidade monitorar alterações no nosso site. SEÇÃO 4 - MODIFICAÇÕES AO SERVIÇO E PREÇOS Preços para nossos produtos são sujeitos a alteração sem notificação. Reservamos o direito de, a qualquer momento, modificar ou descontinuar o Serviço (ou qualquer parte ou conteúdo do mesmo) sem notificação a qualquer momento. Nós não devemos ser responsabilizados por você ou por qualquer terceiro por qualquer modificação, alteração de preço, suspensão ou descontinuação do Serviço. SEÇÃO 5 - PRODUTOS OU SERVIÇOS (se aplicável) Certos produtos ou serviços podem estar disponíveis exclusivamente online através do site. Esses produtos ou serviços podem ter quantidades limitadas e são sujeitos a retorno ou troca apenas de acordo com nossa Política de Retorno. Fizemos todo o esforço para exibir tão precisamente quanto possível as cores e imagens dos nossos produtos que aparecem na loja. Nós não podemos garantir que a exibição de qualquer cor do monitor do seu computador será precisa. Reservamos o direito, mas não somos obrigados, de limitar as vendas de nossos produtos ou Serviços para qualquer pessoa, região geográfica ou jurisdição. Podemos exercer esse direito numa base de caso a caso. Reservamos o direito de limitar as quantidades de quaisquer produtos ou serviços que oferecemos. Todas as descrições de produtos ou preços de produtos são sujeitos a alteração a qualquer momento sem notificação, a nosso critério exclusivo. Reservamos o direito de descontinuar qualquer produto a qualquer momento. Qualquer oferta por qualquer produto ou serviço feito nesse site é nula onde proibida. Não garantimos que a qualidade de quaisquer produtos, serviços, informações ou outros materiais comprados ou obtidos por você vão atender às suas expectativas, ou que quaisquer erros no Serviço serão corrigidos. SEÇÃO 6 - PRECISÃO DE INFORMAÇÕES DE FATURAMENTO E CONTA Reservamos o direito de recusar qualquer pedido que você faça conosco. Podemos, a nosso próprio critério, limitar ou cancelar quantidades compradas por pessoas, por domicílio ou por pedido. Essas restrições podem incluir pedidos feitos por ou sob a mesma conta de cliente, o mesmo cartão de crédito, e/ou pedidos que usam a mesma fatura e/ou endereço de envio. No caso em que fizermos uma alteração para ou cancelar um pedido, podemos tentar notificá-lo ao contatar o e-mail e/ou endereço/número de telefone de faturamento fornecidos no momento que o pedido foi feito. Reservamos o direito de limitar ou proibir pedidos que, em nosso critério exclusivo, parecem ser feitos por comerciantes, revendedores ou distribuidores. Você concorda em fornecer uma informação de conta e compra atual, completa e precisa para todas as compras feitas em nossa loja. Você concorda em atualizar prontamente sua conta e outras informações, incluindo seu endereço de e-mail, números de cartão de crédito e datas de validade, para que possamos completar suas transações e contatar você quando preciso. Para mais detalhes, por favor, revise nossa Política de Retorno. SEÇÃO 7 - FERRAMENTAS OPCIONAIS Podemos fornecer a você acesso a ferramenas de terceiros as quais não monitoramos nem temos qualquer controle nem entrada. Você reconhece e concorda que nós fornecemos acesso a tais ferramentas ”com elas são” e “conforme disponíveis” sem quaisquer garantias, representações ou condições de qualquer tipo e sem qualquer endosso. Nós não temos nenhuma responsabilidade, qualquer que seja, decorrente ou relacionada ao seu uso de ferramentas opcionais de terceiros. Qualquer uso por você de ferramentas opcionais oferecidas através do site é inteiramente por sua conta e risco e você deve garantir que você é familiar com e aprova os termos em que as ferramentas são fornecidas pelos relevantes fornecedor(es) terceiro(s). Podemos também, no futuro, oferecer novos serviços e/ou recursos através do site (incluindo, o lançamento de novas ferramentas e recursos). Tais recursos novos e/ou serviços devem também estar sujeitos a esses Termos de Serviço. SEÇÃO 8 - LINKS DE TERCEIROS Certos produtos, conteúdos e serviços disponíveis via nosso Serviço podem incluir materiais de terceiros. Links de terceiros nesse site podem direcionar você para sites de terceiros que não são afiliados conosco. Nós não somos responsáveis por examinar ou avaliar o conteúdo ou precisão e não garantimos e nem teremos obrigação ou responsabilidade por quaisquer materiais ou sites de terceiros, ou por quaisquer outros materiais, produtos, ou serviços de terceiros. Não somos responsáveis por quaisquer danos ou prejuízos relacionados com a compra ou uso de mercadorias, serviços, recursos, conteúdo, ou quaisquer outras transações feitas em conexão com quaisquer sites de terceiros. Por favor, revise com cuidado as políticas e práticas dos terceiros e certifique-se que você as entenda antes de interagir em qualquer transação. Queixas, reclamações, preocupações ou questões relativas a produtos de terceiros devem ser direcionadas ao terceiro. SEÇÃO 9 - COMENTÁRIOS, FEEDBACK E OUTRAS SUBMISSÕES DE USUÁRIO Se, a nosso pedido, você envia certas submissões específicas (por exemplo entradas de concurso) ou sem um pedido nosso, você envia ideias criativas, sugestões, propostas, planos, ou outros materiais, seja online, por e-mail, por mala postal, ou de outra forma (coletivamente, "comentários"), você concorda que podemos, a qualquer momento, sem restrição, editar, copiar, publicar, distribuir, traduzir e de outra forma usar em quaisquer comentários médios que você encaminha para nós. Nós não deveremos ter nenhuma obrigação (1) em manter quaisquer comentários em confiança; (2) pagar compensação por quaisquer comentários; ou (3) responder a quaisquer comentários. Podemos, mas não temos a obrigação de, monitorar, editar ou remover conteúdo que nós determinamos em nosso próprio critério ser contra a lei, ofensivo, ameaçador, calunioso, difamatório, pornográfico, obsceno ou censurável ou violem a propriedade intelectual de terceiros ou esses Termos de Serviço. Você concorda que seus comentários não violarão qualquer direito de qualquer terceiro, incluindo direitos autorais, marcas registradas, privacidade, personalidade ou outro direito pessoal ou de propriedade. Você concorda ainda que os seus comentários não vão conter material difamatório ou de outra forma ilegal, abusivo ou obsceno, ou que contenham qualquer vírus de computador ou outro malware que poderia de alguma forma afetar a operação do Serviço ou qualquer site relacionado. Você não pode usar um endereço de e-mail falso, fingir ser alguém diferente de si mesmo, ou de outra forma enganar a nós ou terceiros quanto à origem de quaisquer comentários. Você é o único responsável por quaisquer comentários que você faz e sua precisão. Nós não assumimos qualquer responsabilidade e não assumimos qualquer obrigação por quaisquer comentários publicados por você ou por qualquer terceiro. SEÇÃO 10 - INFORMAÇÕES PESSOAIS A sua submissão de suas informações pessoais através da loja é regida pela nossa Política de Privacidade. Para ver nossa Política de Privacidade. SEÇÃO 11 - ERROS, IMPRECISÕES E OMISSÕES Ocasionalmente, pode haver informações no nosso site ou no Serviço que contém erros tipográficos, imprecisões ou omissões que possam relacionar-se a descrições de produtos, preços, promoções, ofertas, taxas de envio do produto, os tempos de transporte e disponibilidade. Reservamos o direito de corrigir quaisquer erros, imprecisões ou omissões, e de alterar ou atualizar informações ou cancelar encomendas se qualquer informação no Serviço ou em qualquer site relacionado é imprecisa, a qualquer momento e sem aviso prévio (incluindo depois de ter enviado o seu pedido). Não assumimos nenhuma obrigação de atualizar, alterar ou esclarecer informações no Serviço ou em qualquer site relacionado, incluindo, sem limitação, a informações sobre preços, exceto conforme exigido por lei. Nenhuma atualização especificada ou data de atualização aplicada no Serviço ou em qualquer site relacionado, devem ser tomadas para indicar que todas as informações no Serviço ou em qualquer site relacionado tenha sido modificada ou atualizada. SEÇÃO 12 - USOS PROIBIDOS Além de outras proibições, conforme estabelecido nos Termos de Serviço, você está proibido de usar o site ou o seu conteúdo: (a) para qualquer finalidade ilegal; (b) para solicitar outros a realizar ou participar de quaisquer atos ilícitos; (c) violar quaisquer regulamentos internacionais, provinciais, estaduais ou federais, regras, leis ou regulamentos locais; (d) infringir ou violar os nossos direitos de propriedade intelectual ou os direitos de propriedade intelectual de terceiros; (e) para assediar, abusar, insultar, danificar, difamar, caluniar, depreciar, intimidar ou discriminar com base em gênero, orientação sexual, religião, etnia, raça, idade, origem nacional ou deficiência; (f) apresentar informações falsas ou enganosas; (g) para fazer o envio ou transmitir vírus ou qualquer outro tipo de código malicioso que será ou poderá ser utilizado em qualquer forma que afete a funcionalidade ou operação do Serviço ou de qualquer site relacionado, outros sites, ou da Internet; (h) coletar ou rastrear as informações pessoais de outras pessoas; (i) para fazer spam, phishing, pharm, pretexto, spider, crawl, ou scrape; (j) para qualquer finalidade obscena ou imoral; ou (k) para interferir ou contornar os recursos de segurança do Serviço ou de qualquer site relacionado, outros sites, ou a Internet. Reservamos o direito de terminar o seu uso do Serviço ou de qualquer site relacionado por violar qualquer dos usos proibidos. SEÇÃO 13 - ISENÇÃO DE RESPONSABILIDADE DE GARANTIAS; LIMITAÇÃO DE RESPONSABILIDADE Nós não garantimos, representamos ou justificamos que o seu uso do nosso serviço não será interrompido, pontual, seguro ou livre de erros. Não garantimos que os resultados que possam ser obtidos do uso do serviço serão precisos ou confiáveis Você concorda que de tempos em tempos, nós podemos remover o serviço por períodos indefinidos de tempo ou cancelar a qualquer momento, sem notificação para você. Você expressamente concorda que o seu uso de, ou falta de habilidade de usar, o serviço é por sua conta e risco. O serviço e todos os produtos e serviços entregues para você através do serviço são (exceto como expressamente declarado por nós) fornecidos "como são" e "conforme disponível" para seu uso, sem qualquer representação, garantias ou condições de qualquer tipo, expressa ou implícita, incluindo todas as garantias implícitas ou condições de comercialidade, quantidade negociável, adequação a uma finalidade específica, durabilidade, título, e não violação. Em nenhum caso devem a GetCake, nossos diretores, oficiais, funcionários, afiliados, agentes, contratantes, estagiários, fornecedores, fornecedores de serviço ou licenciadores ser responsáveis por qualquer prejuízo, perda, reclamação ou danos diretos, indiretos, incidentais, punitivos, especiais ou consequentes de qualquer tipo, incluindo, sem limitação, lucros cessantes, perda de receitas, poupanças perdidas, perda de dados, custos de reposição, ou quaisquer danos semelhantes, seja com base em contrato, ato ilícito (incluindo negligência), responsabilidade objetiva ou de outra forma, decorrentes do seu uso de qualquer um dos serviços ou quaisquer produtos adquiridos usando o serviço, ou para qualquer outra reclamação relacionada de alguma forma para o seu uso do serviço ou qualquer produto, incluindo, mas não limitado a, quaisquer erros ou omissões em qualquer conteúdo, ou qualquer perda ou dano de qualquer tipo incorridos como resultado do uso do serviço ou qualquer conteúdo (ou produto) publicado, transmitido ou de outra forma disponível através do serviço, mesmo se avisados ​​de sua possibilidade. Como alguns estados ou jurisdições não permitem a exclusão ou a limitação de responsabilidade por danos consequentes ou incidentais, em tais estados ou jurisdições, a nossa responsabilidade será limitada à extensão máxima permitida por lei. SEÇÃO 14 - INDENIZAÇÃO Você concorda em indenizar, defender e isentar GetCake e nossos pais, subsidiárias, afiliadas, parceiros, funcionários, diretores, agentes, contratados, licenciadores, fornecedores de serviços, subcontratados, fornecedores, estagiários e funcionários, de qualquer reclamação ou demanda, incluindo honorários razoáveis de advogados, feitos por quaisquer terceiros devido a ou resultantes de sua violação destes Termos de Serviço ou os documentos que incorporam por referência, ou a violação de qualquer lei ou os direitos de um terceiro. SEÇÃO 15 - INDEPENDÊNCIA No caso de qualquer disposição destes Termos de Serviço for considerada ilegal, nula ou ineficaz, tal disposição deve, contudo, ser aplicável até ao limite máximo permitido pela lei aplicável, e a porção inexequível será considerada separada desses Termos de Serviço, tal determinação não prejudica a validade e aplicabilidade de quaisquer outras disposições restantes. SEÇÃO 16 - RESCISÃO As obrigações e responsabilidades das partes incorridas antes da data de rescisão devem sobreviver a rescisão deste acordo para todos os fins. Esses Termos de Serviço são efetivos, a menos e até que seja rescindido por você ou por nós. Você pode rescindir estes Termos de Serviço a qualquer momento, notificando-nos que já não deseja utilizar os nossos serviços, ou quando você deixar de usar o nosso site. Se em nosso critério exclusivo você falhar, ou nós suspeitarmos que você falhou, em cumprir com qualquer termo ou disposição destes Termos de Serviço, nós também podemos rescindir este contrato a qualquer momento sem aviso prévio e você permanecerá responsável por todas as quantias devidas até e incluindo a data da rescisão; e/ou em conformidade, podemos lhe negar acesso a nossos Serviços (ou qualquer parte dele). SEÇÃO 17 - ACORDO INTEGRAL A nossa falha em exercer ou executar qualquer direito ou disposição destes Termos de Serviço não constituirá uma renúncia de tal direito ou disposição. Esses Termos de Serviço e quaisquer políticas ou normas operacionais postadas por nós neste site ou no que diz respeito ao serviço constitui a totalidade do acordo e entendimento entre você e nós e regem o uso do Serviço, substituindo quaisquer acordos anteriores ou contemporâneos, comunicações e propostas, seja oral ou escrita, entre você e nós (incluindo, mas não limitado a quaisquer versões anteriores dos Termos de Serviço). Quaisquer ambiguidades na interpretação destes Termos de Serviço não devem ser interpretadas contra a parte que a elaborou. SEÇÃO 18 - LEGISLAÇÃO APLICÁVEL Esses Termos de Serviço e quaisquer acordos separados em que nós lhe fornecemos os Serviços devem ser regidos por e interpretados de acordo com as leis de Rua Doutor Francisco Lima Neto 117, Campina Grande, PB, 58429-060, Brazil. SEÇÃO 19 - ALTERAÇÕES AOS TERMOS DE SERVIÇO pode revisar a versão mais atual dos Termos de Serviço a qualquer momento nessa página. Reservamos o direito, a nosso critério, de atualizar, modificar ou substituir qualquer parte destes Termos de Serviço ao publicar atualizações e alterações no nosso site. É sua responsabilidade verificar nosso site periodicamente. Seu uso continuado ou acesso ao nosso site ou ao Serviço após a publicação de quaisquer alterações a estes Termos de Serviço constitui aceitação dessas alterações. SEÇÃO 20 - INFORMAÇÃO DE CONTATO Perguntas sobre os Termos de Serviço devem ser enviadas para nós em ddspog@gmail.com.',
		terms_text: 'Termos e condições',
		accept_message: 'Eu aceito os termos de acordo.',
		error_message: 'Precisamos que você aceite nossos termos.',
		nextLbl: 'Próximo',
		previousLbl: 'Anterior'
	};
	
	$scope.paneluserText = {
		text: 'Preencha os campos abaixo com seus dados.',
		nameLbl: 'Nome da Empresa/Doceiro',
		cityLbl: 'Cidade',
		stateLbl: 'Estado',
		streetLbl: 'Rua',
		numberLbl: 'Número',
		neighborhoodLbl: 'Bairro',
		cepLbl: 'CEP',
		addressLbl: 'Endereço Principal',
		phoneLbl: 'Telefone para Contato',
		emailLbl: 'E-mail',
		newsLbl: 'Receber notícias via e-mail?',
		nextLbl: 'Registrar',
		previousLbl: 'Anterior'
	};
	
	$('a.button').click(function(event){
		event.preventDefault();
	});
});