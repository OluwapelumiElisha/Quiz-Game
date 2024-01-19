let i = 0;
let correct = []
let u = 60;
let isSubmit = true;
let array = [
    {
        Questions:'How often should you replace your toothbrush for optimal dental hygience?',
        option: ['Every 6 months.', 'Once a year.','Every 3 months.', 'Only when it looks worn.',],
        answer : 'Every 3 months.',
        selectedanswer: ''
    },
    {
        Questions:'What is the capital of France?',
        option: ['London.','Paris.','South-France.','Tokoyo.'],
        answer : 'Paris.',
        selectedanswer : ''
    },
    {
        Questions:'How many Miles is Nile River?',
        option: ['20,000 Miles.', '300 Miles.', '20 Miles.', '4,135 Miles.'],
        answer: '4,135 Miles.',
        selectedanswer : ''
    },
    {
        Questions:'The Industrial Revolution originated in which Country?',
        option: ['United States.', 'Germany.', 'United Kingdom.', 'Japan.',],
        answer : 'United Kingdom.',
        selectedanswer: ''
    },
    {
        Questions:'Who was the first President of the United States?',
        option: ['Thomas Jefferson.', 'George Washington.','Abraham Lincoln.', 'John Adams',],
        answer : 'George Washington.',
        selectedanswer : ''
    },
    {
        Questions:'The largest country in the world by land area is?',
        option: ['Russia.', 'United Kingdom.', 'India.', 'China.',],
        answer : 'Russia.',
        selectedanswer: ''
    },
    {
        Questions:'What is the recommended frequency for bathing or showering for good personal hygience?',
        option: ['Once a week.', 'Twice a week.', 'Daily.', 'Monthly.',],
        answer : 'Daily.',
        selectedanswer: ''  
    },
    {
        Questions:'In 2024, which city hosted the summer Olympics?',
        option: ['Beijing.','Paris.','Los Angeles.','Tokoyo.'],
        answer : 'Los Angeles.',
        selectedanswer: ''  
    },
    {
        Questions:'In 2023, which country hosted the G20 Summit?',
        option: ['Brazil.','Indonesia.','Los Angeles.','South Africa.'],
        answer : 'Indonesia.',
        selectedanswer: ''  
    },
    {
        Questions:'What is the recommended duration for brushing your teeth during each session?',
        option: ['30 seconds.','1 minute.','2 minutes.','5 minutes.'],
        answer : '2 minutes.',
        selectedanswer: ''  
    },
    {
        Questions:'When did World War || end?',
        option: ['September 2, 1945.','May 9, 2003.','June 27, 1945','December 1, 1952.'],
        answer : '2 minutes.',
        selectedanswer: ''  
    },
    {
        Questions:'Which factor contributes to preventing body odor?',
        option: ['Avoiding all physical activity.','Regularly changing clothes.','Using strong perfumes.','Ignoring personal grooming.'],
        answer : 'Regularly changing clothes.',
        selectedanswer: ''  
    },
    {
        Questions:'As of the lastest data, which country is the largest emitter of greenhouse gases globally?',
        option: ['China.','United States.','India.','Russia.'],
        answer : 'China.',
        selectedanswer: ''  
    },
    {
        Questions:'The Magna Carta, signed in 1215, is considered a milestone in the development of what?',
        option: ['Capitalism.','Feudalism.','Democracy.','Communism.'],
        answer : 'Democracy.',
        selectedanswer: ''  
    },
    {
        Questions:'Who is the leader of the Soviet Union during World War ||?',
        option: ['Vladimir Putin.','Joseph Stalin.','Mikhail Gorbachev.','Nikita Khrushchev.'],
        answer : 'Joseph Stalin.',
        selectedanswer: ''  
    },
    {
        Questions:'What is the proper way to cover your mouth and nose when sneezing or coughing to maintain good respiratory hygiene?',
        option: ['Using your hands.','Sneezing openly.','Using a tissue or your elbow.','Holding your breath.'],
        answer : 'Using a tissue or your elbow.',
        selectedanswer: ''  
    },
    {
        Questions:'Which technology company recently became the first to reach a market valuation of $3 trillion?',
        option: ['Apple.','Microsoft.','Amazon.','Google.'],
        answer : 'Apple.',
        selectedanswer: ''  
    },
    {
        Questions:'Which ancient civilization built the pyramids of Giza',
        option: ['Mesopotamina.','Anicent Greece.','Anicent Egypt.','indus Valley Civilzation.'],
        answer : 'Anicent Egypt.',
        selectedanswer: ''  
    },
    {
        Questions:'Who Develop this quiz game?',
        option: ['Tunde.','Elisha.','Azeez.','James.'],
        answer : 'Elisha.',
        selectedanswer: ''  
    },
    {
        Questions:'How often should you trim your fingernails to promote good hygience?',
        option: ['Once a month.','Only when they break.','Weekly.','Every Six months.'],
        answer : 'Weekly.',
        selectedanswer: ''  
    },
]
function start() {
    Count()
    Page.style.display = 'none'
    questionPage.style.display = 'block'
    disp()
    
}
function disp() {
    demo.innerHTML = array[i].Questions
    display.innerHTML= ''
    array[i].option.forEach((el,index)=> {
        display.innerHTML +=`
            <div>
            <input ${array[i].selectedanswer === el ? 'checked' : ' '} type="radio" name="options" onclick="hangeChange('${el}')"  >
            <span>${el}</span>
            </div>
        `
    })

    number.innerHTML = i + 1
}

function p() {
    if (i > 0) {
        i--
        disp()
    }
}
function n() {
  
    if (i < array.length -1) {
        i++
        disp()
    }
}
    function hangeChange(params) {
        array[i].selectedanswer = params
    }
    function Count() {
    let stop = setInterval(() => {
        timer.innerHTML = u--
        if (u == -2) {
            clearInterval(stop)
            questionPage.style.display = 'none'
            submitpage.style.display = 'block'
            handleSubmit()
        }
    }, 2000);
    }

    function PRESUBMIT() {
        let unanswer = array.filter(el => el.selectedanswer == '')
        if (unanswer.length > 0) {
            
            questionPage.style.display = 'none'
            sure.hidden  = false
            isSubmit = false  
        }
        if (isSubmit) {
            handleSubmit()
        }
        }
        function handleSubmit() {
        const result = array.filter((el)=> el.selectedanswer === el.answer)
        one.innerHTML = `${result.length} `
        two.innerHTML = `${array.length}`
        questionPage.style.display = 'none'
        submitpage.style.display = 'block'
        }
        function handleResponse(message) {
            if (message == 'yes') {
                isSubmit = true
                sure.hidden  = true
                questionPage.style.display = 'none'
                submitpage.style.display = 'block'
                handleSubmit()
            }else{
                sure.hidden  = true
                questionPage.style.display = 'block'
            }
        }

 