(Function () {
    // Link localização do seu garfo para que você não tem que modificar muitas coisas.
    var fork = "Yemasthui";

    // Definir a nossa função responsável para estender o bot.
    função estender () {
        // Se o bot não foi carregado corretamente, tente novamente em 1 segundo (s).
        se (window.bot!) {
            retornar setTimeout (estenda, 1 * 1000);
        }

        // Precaução para ter certeza que é atribuído corretamente.
        var bot = window.bot;

        // Configurações de carga personalizados fixado abaixo
        bot.retrieveSettings ();

        / *
         Estender o bot aqui, quer chamando outra função ou diretamente aqui.
         Código de modelo para um comando bot:

         bot.commands.commandCommand = {
         comando: "cmd",
         classificação: 'user / leão de chácara / mod / manager',
         digite: 'startsWith / exato,
         funcionalidade: function (bate-papo, cmd) {
         if (! this.type === 'exata' && chat.message.length == cmd.length) vazio retorno (0);
         if (! bot.commands.executable (this.rank, chat)) vazio retorno (0);
         else {
         // Funcionalidade Comandos vai aqui.
         }
         }
         }

         * /

        bot.commands.baconCommand = {
            comando: 'Bacon', // O comando a ser chamado. Com o comando padrão literal isso seria: o bacon
            classificação: 'usuário', // permissão mínima do usuário para usar o comando
            Tipo: 'exata', // Especifique se pode aceitar variáveis ​​ou não (em caso afirmativo, estes têm de ser tratado a si mesmo através da chat.message
            funcionalidade: function (bate-papo, cmd) {
                if (! this.type === 'exata' && chat.message.length == cmd.length) vazio retorno (0);
                if (! bot.commands.executable (this.rank, chat)) vazio retorno (0);
                else {
                    API.sendChat ("/ me Bacon !!!");
                }
            }
        };

        // Carrega o pacote de bate-papo novamente ter em conta quaisquer mudanças
        bot.loadChat ();

    }

    // Altere as configurações bots padrão e verifique se eles são carregados na inicialização

    localStorage.setItem ("basicBotsettings", JSON.stringify ({
        botname: "basicBot",
        idioma: "português",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // verdadeiro ou falso
        cmdDeletion: true,
        chatLink: "https://rawgit.com/TerrorMajin/basicBot/master/lang/en.json",
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        LockGuard: false,
        maximumLocktime: 10,
        CycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        TIMEGUARD: true,
        maximumSongLength: 10,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["Tema", "Essa música não se encaixa no tema do quarto."],
            ["Op", "Esta canção está na lista de OP."],
            ["História", "Essa música é na história."],
            ["Misturar", "Você jogou um mix, que é contra as regras."],
            ["Som", "A canção que você jogou teve má qualidade do som ou nenhum som."],
            ["NSFW", "A música que continha era NSFW (imagem ou som)."],
            ["Indisponível", "A canção que você jogou não estava disponível para alguns usuários."]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "embaixador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Mensagem Temporária do Dia",
        filterChat: true,
        etaRestriction: false,
        boas-vindas: true,
        Oplink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        site: nulo,
        intervalMessages: [],
        messageInterval: 5,
        songstats: verdadeiro,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" fork "/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/" fork "/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    // Iniciar o bot e estendê-lo quando ele foi carregado.
    $ .getScript ("Https://rawgit.com/Yemasthui/basicBot/master/basicBot.js", prolongar);

