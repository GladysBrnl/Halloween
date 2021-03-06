/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-terrain-1', 'assets/level/background-2/bg2-terrain-1.png')
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg-wooden-bridge', 'assets/level/background-1/bg-wooden-bridge.png');

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gLeft','assets/level/ground/g-left.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('g-stone-3','assets/level/ground/g-stone-3.png');
        this.load.image('g-stone-4','assets/level/ground/g-stone-4.png');
        this.load.image('g-mushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('g-wooden-bridge','assets/level/ground/g-wooden-bridge.png');
        this.load.image('g-water','assets/level/ground/g-water.png');
        this.load.image('g-box2','assets/level/ground/g-box-2.png');
        this.load.image('g-fellen', 'assets/level/ground/g-fellen-tree-1.png');
        this.load.image('g-stone-5','assets/level/ground/g-stone-5.png');




        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

       //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        this.load.image('filterFilm1', 'assets/level/filters/film/frame-1.png');
        this.load.image('filterFilm2', 'assets/level/filters/film/frame-2.png');
        this.load.image('filterFilm3', 'assets/level/filters/film/frame-3.png');

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');

    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);

        /**
         * Terrain2 dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-150,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);

        /**
         * Terrain1 dans bg2
         *  @type {Phaser.GameObjects.Container}
         */

        let bg2Terrain1=this.add.image(700,100,'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain1);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(350,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle=-5; //pencher l'arbre de -5 degrès

        let bg2Tree3=this.add.image(725,-100,'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-5;

        let bg2Tree4=this.add.image(1100,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree4);


        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-400,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain1=this.add.image(650,280, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1);

        let bg1Terrain4=this.add.image(1000,250, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain4);
        let bg1Terrain5=this.add.image(1700,250, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain5);

        /**
         * Arbre dans bg1
         *  @type {Phaser.GameObjects.Image}
         */
        let bg1Tree1=this.add.image(15,-300,'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree1);

        let bg1Tree4=this.add.image(1100,-75,'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree4);


        /**
         * Arbre dans bg1
         *  @type {Phaser.GameObjects.Image}
         */
        let bg1Tree3=this.add.image(125,-200,'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3);


        let bg1Tree2=this.add.image(1300,-100,'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree2);

        let bg1woodenBridge=this.add.image(1500,260,'bg-wooden-bridge').setOrigin(0,0);
        this.bg1Container.add(bg1woodenBridge);


        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);

        let gwater=this.add.image(590,400,'g-water').setOrigin(0,0);
        gwater.scale=1.2;
        this.groundContainer.add(gwater);

        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1=this.add.image(300,350, 'gTree1').setOrigin(0,1);
        this.groundContainer.add(tree1);

        let gTree2=this.add.image(60, -150, 'gTree2').setOrigin(0,0);
        this.groundContainer.add(gTree2);

        let tree3=this.add.image(1200,400,'gTree1').setOrigin(0,1);
        this.groundContainer.add(tree3)
        tree3.angle=-10

        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions
        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);

        let gMid4=this.add.image(975,350,'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid4);

        let gMid5=this.add.image(gMid4.x+gMid4.width,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid5);

        let gMid6=this.add.image(gMid5.x+gMid5.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid6);

        let gMid7=this.add.image(1900,400, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid7);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        let gstone3=this.add.image(470, 330,'g-stone-3').setOrigin(0,0);
        this.groundContainer.add(gstone3);

        let gstone4=this.add.image(1050,320,'g-stone-4').setOrigin(0,0);
        this.groundContainer.add(gstone4);

        let gstone5=this.add.image(1200,330,'g-stone-5').setOrigin(0,0);
        this.groundContainer.add(gstone5);


        let gmushroom1=this.add.image(200,280,'g-mushroom1').setOrigin(0,0);
        this.groundContainer.add(gmushroom1);

        let gmushroom2=this.add.image(1375,280,'g-mushroom1').setOrigin(0,0);
        this.groundContainer.add(gmushroom2);

        let gwoodenBridge=this.add.image(570,270,'g-wooden-bridge').setOrigin(0,0);
        this.groundContainer.add(gwoodenBridge);



        let gbox2=this.add.image(700,250,'g-box2').setOrigin(0,0);
        this.groundContainer.add(gbox2)

        let fallen1=this.add.image(1500,250,'g-fellen').setOrigin(0,0);
        this.groundContainer.add(fallen1)
        fallen1.angle= 10





        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.7;
        this.bg1Container.scrollFactorX=0.9;
        this.groundContainer.scrollFactorX=1;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=5;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-5;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
