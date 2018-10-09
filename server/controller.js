let peacefulQuotes= [{

id:1,
quote: "“Love and peace of mind do protect us. They allow us to overcome the problems that life hands us. They teach us to survive… to live now… to have the courage to confront each day.” —Bernie Siegel"}, 

{id:2,
quote: "You’ll never find peace of mind until you listen to your heart.” —George Michael"},

{id:3,
quote: "Do not let the behavior of others destroy your inner peace.” —Dalai Lama"},

{id:4,
quote: "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.” —Wayne W. Dyer"},

{id:5,
quote: "“It isn’t enough to talk about peace. One must believe in it. And it isn’t enough to believe in it. One must work at it.” —Eleanor Roosevelt"},

{id:6,
quote: "Nobody can bring you peace but yourself.” —Ralph Waldo Emerson"},

{id:7,
quote:  "The life of inner peace, being harmonious and without stress, is the easiest type of existence.” —Norman Vincent Peale"},

];

let message = [];
let id= 7;


module.exports = {

    create:(req, res) => {
        console.log("create", req.body)
        id++
        let {value} = req.body;
        let newQuote = {
            quote:value,
            id:id 
        }
        peacefulQuotes.push(newQuote);
        console.log(peacefulQuotes)
        let randomNum = Math.floor(Math.random() * peacefulQuotes.length)
        let responseArr = []
        responseArr.push(peacefulQuotes[randomNum])
        res.status(200).send(responseArr);
    },

    read:(req, res) =>{
        let randomNum = Math.floor(Math.random() * peacefulQuotes.length)
        let responseArr = []
        responseArr.push(peacefulQuotes[randomNum])
        res.status(200).send(responseArr);
    },

    update:(req, res) => {
        console.log("update", req.body, req.params.value)
        const {quote} = req.body;
        const updateID = req.params.id;
        
        const messageIndex = peacefulQuotes.findIndex ( message => message.id == updateID);
        let message = peacefulQuotes[messageIndex];
     
         peacefulQuotes[messageIndex].quote= quote;
        
        res.status(200).send( message);
    },

    deleteMessage: (req, res) => {
        console.log("delete", req.params.id)
        const deleteID = req.params.id;
        messageIndex = peacefulQuotes.findIndex(message => message.id== deleteID);
        peacefulQuotes.splice(messageIndex, 1);
        let responseArr = []
        let randomNum = Math.floor(Math.random() * peacefulQuotes.length)
        responseArr.push(peacefulQuotes[randomNum])
        res.status(200).send(responseArr);
        
    } 


   
    }


        
    
  


