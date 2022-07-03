var documenterSearchIndex = {"docs":
[{"location":"notebook_examples/#Notebook-Examples","page":"Notebook Examples","title":"Notebook Examples","text":"","category":"section"},{"location":"AvailableModels/Wilson/#Wilson","page":"Wilson","title":"Wilson","text":"","category":"section"},{"location":"AvailableModels/NRTL/#NRTL","page":"NRTL","title":"NRTL","text":"","category":"section"},{"location":"AvailableModels/PC-SAFT/#PC-SAFT","page":"PC-SAFT","title":"PC-SAFT","text":"","category":"section"},{"location":"to-do_list/#To-do-List","page":"To-do list","title":"To-do List","text":"","category":"section"},{"location":"AvailableModels/UNIQUAC-SAC/#UNIQUAC-SAC","page":"UNIQUAC-SAC","title":"UNIQUAC-SAC","text":"","category":"section"},{"location":"basic_usage/#Basic-Usage","page":"Basic Usage","title":"Basic Usage","text":"","category":"section"},{"location":"AvailableModels/UNIQUAC/#UNIQUAC","page":"UNIQUAC","title":"UNIQUAC","text":"","category":"section"},{"location":"background/","page":"Background","title":"Background","text":"The focus on enantiopure drugs has forced the pharmaceutical industry to look for cost efficient methods of production. These methods are required to be efficient enough to separate the enantiomeric target from a racemic mixture. One way that this has been achieved is through the direct crystallisation in a racemic mixture. This stochastic process is poorly understood and leads to long and costly experiments. To improve upon this randomness, mathematical models can be developed to predict the thermodynamic values from the separation process. These models look to reduce the experimental time necessary for solubility diagrams. This project was made in collaboration with Imperial College London's Institute of Molecular Science and Engineering and BASF. The goal was to develop a software to model solubility diagrams of enantiomers.","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"Asymmetrical crystallisation of a chemical molecule can be traced back to experiments performed by Arago and Biot in 1811. This experiment showed different rotations of polarised light on cut crystals. This was later reinforced on organic products, where similar results were shown [1]. The study of stereochemistry is formally attributed to Louis Pasteur, who in 1848 detected different crystal structures after the crystallising the racemic sodium ammonium salt of tartaric acid. Like Arago and Biot, he also saw that light rotated differently on these crystals [2]. The key discovery was presented by Van 't Hoff and Le Bel during independent research experiments. What awarded Henry Van’t Hoff the first ever Nobel prize in Chemistry was detailing the relationship between three-dimensional molecular structure and optical activity and the concept of the asymmetric carbon atom [3][4].","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"Stereoisomers are molecules that have both the same molecular formula and connectivity but differ in their three-dimensional arrangement. Stereoisomers can be either diastereomers or enantiomers. Diastereomers have different arrangement of atoms that cannot be optically rearranged to form the counterpart. Enantiomers are mirrored non-superposable molecules that could be rearranged via a chiral shift to form the opposite. The standard nomenclature is the R/S system, used to identify distinct enantiomers. ","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"(Image: Enantiomers)","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"Enantiomeric molecules will share the same chemical and physical properties in solution which make them indistinguishable components. In biological systems the function of a protein is determined by its shape, and the shape of a protein can be defined by its amino acid components. 19 out of the 20 amino acids that naturally occur in nature are enantiomers, and only the S enantiomers are used for protein synthesis [5]. This exclusivity extends to pharmaceuticals. Omeprazole (also known as Prilosec) has been used for years as a medication for gastrointestinal diseases. This drug is the crystal product of both enantiomers of omeprazole, commonly known as the racemate. In the treatment of gastrointestinal symptoms, only the S-enantiomer will have any medicinal properties. The R-enantiomer won’t have the effect of its mirror molecule until it has produced a chiral shift in vivo. The more challenging example is that of salbutamol (also known as albuterol) which is an enantiomeric drug that is used to treat asthma and asthma attacks. R-salbutamol causes the opening of airways in the lungs, but its mirror enantiomer produces a variety of unpleasant side-effects. This apparent limitation has pushed the industry to develop enantiopure drugs, or enantiomeric drugs of only one enantiomer. In the case of omeprazole, even though its pharmacological benefits are still debated, there is no doubt that it has been a financial success [6] [7].","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"(Image: Ketamine)","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"The symmetrical properties of enantiomers in solution makes the separation of these components a challenge. To synthesize enantiopure medications, the product needs to be purely composed of our desired enantiomer crystal. In very few cases the process is very simple and chiral pooling, or a chiral catalyst can be used [8]. The most common procedure to separate enantiomeric molecules is to use the racemic method. In which you use chiral mobile phase additives to resolve a racemate into a pure enantiomer or you utilise a chiral derivatizing agent for enantioseparation. Either process is costly and time-consuming but have been consistently used in the pharmacological industry [9]. These methods have been successful in both small processes and in batch processes but haven’t been thoroughly researched in continuous processes. There are some obvious economic benefits to transitioning to continuous processes. This lucrative opportunity interests pharmaceutical companies that want to maximise their production while keeping costs low. Therefore, one method that can be considered is the direct crystallisation of one enantiomer in a racemic mixture [10]. This process achieves enantiospecific crystallization by modulating the concentration of the solutes. By saturating the solution of a mixture with one of the solutes, only the seeded component will crystalize, leaving only the opposite enantiomer in the solution. In a mixture of enantiomers, crystallization can occur in two ways. In conglomerates, crystallization occurs independently while racemic compounds produce a racemate crystal at certain compositions. 90% of enantiomeric mixtures will crystalise as racemic compounds and produce a racemate, which means solubilities are complex to determine [11].","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"(Image: Preferential Crystallisation)","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"Knowledge of the points of solubility, as a function of their temperature and composition, is essential to produce enantiopure products from a racemic compound. These experiments require extensive trial-and-error results that are both costly and time-consuming. The process is also solvent-solute specific, so the process needs to be repeated across any combination of components. To circumvent this requirement, we can develop a thermodynamic model in order to predict the possible solubility values. Solubility of a binary system can be predicted using the equations put forth by Schröder and van Laar [12]. The ideal solubility of a compound (x_i^sat) in a solution can be calculated by knowing the compound’s calorimetric properties (Δ_fusH_i T_m) and the activity coefficient (gamma_i^L). This equation is simplified from the relationship between the activity coefficient and fugacity in the liquid phase. The calorimetric properties of a solute can be easily determined and used irregardless of the solvent.","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"ln(x^sat_iγ^L_i) = dfracΔ_fusH_iR(dfrac1T_mi - dfrac1T)","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"The activity coefficient of a non-ideal mixture must be computed using thermodynamic models. Traditionally, empirical methods have been used to determine the activity coefficient. Empirical models such as Wilson, NRTL (Non-random two liquid), UNIQUAC (Universal Quasichemical), etc., have been successfully used in industry to model pharmaceutical solubility [13]. These equations are dependent on interaction parameters derived from experimental research. Once obtained, the unique solute-solvent parameters can be used in any composition at a broad temperature range. Completely predictive models have also been used to determine the activity coefficient with limited success. The required information can be determined by either quantum calculations using COSMO-RS (Conductor like Screening Model for Real Solvents) or equations of state such as PC-SAFT (Perturbation-Chain Statistical Associating Fluid Theory). Both methods will yield an acceptable activity coefficient, but their use is considered less reliable compared to empirical models if the experimental data is available [14]. Recently, modifications to the empirical methods have yielded semi-empirical formulations that attempt to minimize error. Predominantly, this comes as the SAC modification (Segment Activity Coefficient), where the molecule’s surface interactions are divided in segments and each type of solute-solvent interaction (hydrophobic, hydrophilic, and polar) has been predefined.","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"The solubility data of enantiomeric mixtures is easily interpreted using a ternary phase diagram. In this three-variable chart, every point represents a composition of the R/S enantiomer and the solvent of the solution. The Schröder and van Laar equation allows for the solubility lines of the enantiomers to be calculated. This is the case for conglomerates, but in most situations the mixture will behave as a racemic compound, where the racemate must be accounted for. Like single enantiomers, we require the activity coefficient of the racemate to model solubility. An expansion of the Schröder and van Laar equation leads to a modified Prigogine and Defay equation [15] [16]. This relationship can be used to determine the solubility point of the racemate with the activity coefficient of the constituent enantiomers. This allows for the calculation of the racemate solubility curve and determining the eutectic points of the solution. Knowing the eutectic points gives us enough information to design a process where we can produce one kind of crystal enantiomer.","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"(Image: Ternary Phase Diagram) \nln space 4 space x_i^satgamma^L_ix_j^satgamma^L_j = dfracΔ_fusH_racR(dfrac1T_m rac - dfrac1T) \n#### References","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"[1] Leclercq F. Arago, Biot, and Fresnel Elucidate Circular Polarization. Revue dhistoire des sciences. 2013;66(2):395-416.\n[2] Pasteur L. Memoires sur la relation qui peut exister entre la forme crystalline et al composition chimique, et sur la cause de la polarization rotatoire. Compt. rend.. 1848;26:535-8.\n[3] Hoff JH. Voorstel tot uitbreiding der tegenwoordig in de scheikunde gebruikte structuur-formules in de ruimte: benevens een daarmee samenhangende opmerking omtrent het verband tusschen optisch actief vermogen en chemische constitutie van organische verbindingen. Greven; 1874.\n[4] Le Bel JA. On the relations which exist between the atomic formulas of organic compounds and the rotatory power of their solutions. Bull. Soc. Chim. 1874;22:337-47. \n[5] Bertrand M, Chabin A, Brack A, Westall F. Separation of amino acid enantiomers VIA chiral derivatization and non-chiral gas chromatography. Journal of Chromatography A. 2008 Feb 8;1180(1-2):131-7.\n[6] Asghar W, Pittman E, Jamali F. Comparative efficacy of esomeprazole and omeprazole: Racemate to single enantiomer switch. DARU Journal of Pharmaceutical Sciences. 2015 Dec;23(1):1-7.\n[7] Conley JG, Bican PM, Ernst H. Value articulation: a framework for the strategic management of intellectual property. California Management Review. 2013 Jul;55(4):102-20.\n[8] Hawkins JM, Watson TJ. Asymmetric catalysis in the pharmaceutical industry. Angewandte Chemie International Edition. 2004 Jun 21;43(25):3224-8.\n[9] Mane S. Racemic drug resolution: a comprehensive guide. Analytical Methods. 2016;8(42):7567-86.\n[10] Lorenz H, Sheehan P, Seidel-Morgenstern A. Coupling of simulated moving bed chromatography and fractional crystallisation for efficient enantioseparation. Journal of Chromatography A. 2001 Jan 26;908(1-2):201-14.\n[11] Lorenz H, Temmel E, Seidel-Morgenstern A. Continuous Enantioselective Crystallization of Chiral Compounds. InThe Handbook of Continuous Crystallization 2020 Feb 4 (pp. 422-468).\n[12] Jacques J, Collet A, Wilen SH. Enantiomers, racemates, and resolutions. Wiley; 1981.\n[13] Salimi M, Zarenezhad B, Fakhraian H, Choobdari E. Thermodynamic modeling of chiral compounds solubility using Correlative and predictive models. Journal of Applied Solution Chemistry and Modeling. 2015 Jul 1;4(3):143.\n[14] Tung HH, Tabora J, Variankaval N, Bakken D, Chen CC. Prediction of pharmaceutical solubility via NRTL-SAC and COSMO-SAC. Journal of Pharmaceutical Sciences. 2008 May 1;97(5):1813-20.\n[15] Prigogine I, Defay R. Chemical thermodynamics. Norwich: Jarrold & Sons. 1958.\n[16] Tulashie SK, Kaemmerer H, Lorenz H, Seidel-Morgenstern A. Solid− liquid equilibria of mandelic acid enantiomers in two chiral solvents: experimental determination and model correlation. Journal of Chemical & Engineering Data. 2010 Jan 14;55(1):333-40.","category":"page"},{"location":"AvailableModels/NRTL-SAC/#NRTL-SAC","page":"NRTL-SAC","title":"NRTL-SAC","text":"","category":"section"},{"location":"#SolMod.jl","page":"Home","title":"SolMod.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A Julia package used for the prediction of solubility with the focus on creating ternary phase diagrams for pharmaceutical solubility of enantiopure drugs.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Thermodynamic Models:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Empirical Models:\nWilson\nNRTL\nUNIQUAC","category":"page"},{"location":"","page":"Home","title":"Home","text":"Semi-Empirical Models:\nNRTL-SAC\nUNIQUAC-SAC","category":"page"},{"location":"","page":"Home","title":"Home","text":"Predictive Models:\nPC-SAFT","category":"page"},{"location":"","page":"Home","title":"Home","text":"The documentation is laid out as follows:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Background: Find scientific basis to determine the activity coefficient of a compound in a mixture and find the point of solubility.\nBasic Usage: Find out how to use the available models to determine the activity coefficient and the respective solubility of a molecule.\nNotebook Examples: A list of available notebooks showcasing different functionalities of the package.\nAPI: A list of all available methods.","category":"page"},{"location":"#Author","page":"Home","title":"Author","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Roberto Gambarini, Imperial College London","category":"page"},{"location":"#License","page":"Home","title":"License","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"SolMod.jl is licensed under the MIT license.","category":"page"}]
}
