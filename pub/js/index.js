
const exampleData = [{"id": 1, "Name": "MayanoTopGun", "Rank": "A", "Score": 9999}, 
                     {"id": 2, "Name": "TokaiTeio", "Rank": "A", "Score": 9000}, 
                     {"id": 3, "Name": "SatonoDiamond", "Rank": "B", "Score": 8000},
                     {"id": 4, "Name": "MejiroMcQueen", "Rank": "B", "Score": 7777},
                     {"id": 5, "Name": "SpecialWeek", "Rank": "C", "Score": 5555},
                    ];

function sample() {
    const example1 = new EasyLeaderboard();
    example1.createLeaderboard("Sample", "Sample", "Umamusume Personal Ranking", ["Name", "Rank", "Score"], exampleData);
    example1.changeUserIcon(1, "mayano.png");
    example1.changeUserIcon(2, "teio.png");
    example1.changeUserIcon(3, "daiya.png");
    example1.changeUserIcon(4, "mcqueen.png");
    example1.changeUserIcon(5, "spe.png");
    example1.setLinkOnIcon(1, "https://en.wikipedia.org/wiki/Mayano_Top_Gun");
    example1.setLinkOnIcon(2, "https://en.wikipedia.org/wiki/Tokai_Teio");
    example1.setLinkOnIcon(3, "https://en.wikipedia.org/wiki/Satono_Diamond");
    example1.setLinkOnIcon(4, "https://en.wikipedia.org/wiki/Mejiro_McQueen");
    example1.setLinkOnIcon(5, "https://en.wikipedia.org/wiki/Special_Week");
}

sample();