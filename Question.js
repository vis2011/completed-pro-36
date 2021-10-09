class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter your name....")
    this.input2 = createInput("Enter you option...");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.question1 = createElement('h3')
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.option5 = createElement('h4')
    this.option6 = createElement('h4')
    this.option7 = createElement('h4')
    this.option8 = createElement('h4')
    this.message = createElement("h2");
    this.message1 = createElement('h2')
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(150, 80);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);


    this.button.mousePressed(()=>{
      
       this.message.html("Thank You,Your Answer Has Been Submitted for the next question press this button");
       this.message.position(10, 350);
       this.button1 = createButton('next question');
       this.button1.position(650,450);

       this.button1.mousePressed(()=>{
        this.question.hide();
        this.option1.hide();
       this.option2.hide();
       this.option3.hide();
       this.option4.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        this.button1.hide();
        this.message.hide();

        this.question1.html("Question:- What month of the year has 28 days? " );
        this.question1.position(150, 80);
        this.option5.html("1: april " );
        this.option5.position(150, 100);
        this.option6.html("2: february" );
        this.option6.position(150, 120);
        this.option7.html("3: all of them " );
        this.option7.position(150, 140);
        this.option8.html("4: none of them" );
        this.option8.position(150, 160);
        this.button3 = createButton('Submit');
        this.button3.position(290, 300);
        this.input3 = createInput("Enter your name....")
        this.input4 = createInput("Enter you option...");
        this.input3.position(150, 230);
        this.input4.position(350, 230);
        this.button3.mousePressed(()=>{
      
          this.message1.html("Thank You,Your Answer Has Been Submitted");
          this.message1.position(10, 350);
        })
       })
      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position();

      // this.message("Thank You, Your Answer Has Been Submitted");
      // this.message(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350);


    });
  }
}
