
var secretWord;
var wrongGuess;
var playerLost;
var playerWon;
var usedLetters;
function startGame(){
   //performing initial checks
   if(playerWon){
      alert("You already won, click on start to play again");
   }else {
     if(playerLost){
       alert("You lost, click on start to play again");
     }else {
       m_output = document.getElementById("out").value;
       if(m_output==""){
         alert("Start the game before guessing");
       }else {
         m_guessed =document.getElementById("guess").value;
         if(m_guessed.length>1){
           alert("You can only guess one letter at a time!");
         }else {
           if(m_guessed==""){
           alert("Guess something, don't leave this blank!");
           }else {
             var found_it = compareInput(secretWord);
             if(found_it==true){
             changeOutput();
           }else {
             changeImage();
           }
           }
         }
       }
     }

   }

}
    createGame = () =>{
    m_word = selectWord();
    m_output = document.getElementById("out");
    m_output.value="";
    m_message= document.getElementById("message");
    m_message.value="";
    playerLost=false;
    playerWon=false;
    usedLetters=[];
    for(let i=0;i<m_word.length;i++)
    {m_output.value += "-"};
    secretWord=m_word;
    wrongGuess=0;
    }

    compareInput = (m_word) =>{
      m_output = document.getElementById("out");
      m_guessed =document.getElementById("guess").value;
      var alreadyGuessed=false;
      for(let i = 0; i < usedLetters.length; i++) {
        if(usedLetters[i]==m_guessed){
          alreadyGuessed=true;
        }
      }
      usedLetters.push(m_guessed);
      let foundLetter = false;
      if(alreadyGuessed){
        alert("You already guessed this letter, try something else");
      }else {
        for(let i =0 ;i <m_word.length ; i++){
          if(m_guessed==m_word.charAt(i)){
            foundLetter = true;
            break;
          }else{
            foundLetter = false;
          }
        }
      if(!foundLetter){
      wrongGuess++;
      }
      }
      return foundLetter;
    }

    changeOutput = () => {
    m_output.value= document.getElementById("out").value;
    m_message.value = document.getElementById("message").value;
      for(let i=0;i<m_word.length;i++)
      {
        if(m_word.charAt(i)==m_guessed)
        {
          m_output.value= m_output.value.substr(0,i) + m_guessed + m_output.value.substr(i+1);
        }
      }
      if(m_output.value==secretWord){
        playerWon=true;
        m_message.value="YOU WON! to play again click on start";
      }
    }

    function changeImage()
    {
      theImage = document.getElementById("theImage");
      m_output.value= document.getElementById("out").value;
      m_message.value = document.getElementById("message").value;
      if(wrongGuess==1){
        theImage.src = "img4.jpg";
      }else if(wrongGuess==2) {
        theImage.src = "img3.jpg";
      }else if (wrongGuess==3) {
        theImage.src = "img2.jpg";
      }else if (wrongGuess==4) {
        theImage.src = "img1.jpg";
        m_output.value=secretWord;
        m_message.value="You lost! try again by clicking on start";
        playerLost=true;
      }else {
      }
    }

    function selectWord()
    {
      var randNum = Math.floor((Math.random() * 499) + 0);
      //first 500 words copied from list.txt
      var text = `about
      search
      other
      which
      their
      there
      contact
      business
      online
      first
      would
      services
      these
      click
      service
      price
      people
      state
      email
      health
      world
      products
      music
      should
      product
      system
      policy
      number
      please
      support
      message
      after
      software
      video
      where
      rights
      public
      books
      school
      through
      links
      review
      years
      order
      privacy
      items
      company
      group
      under
      general
      research
      january
      reviews
      program
      games
      could
      great
      united
      hotel
      center
      store
      travel
      comments
      report
      member
      details
      terms
      before
      hotels
      right
      because
      local
      those
      using
      results
      office
      national
      design
      posted
      internet
      address
      within
      states
      phone
      shipping
      reserved
      subject
      between
      forum
      family
      based
      black
      check
      special
      prices
      website
      index
      being
      women
      today
      south
      project
      pages
      version
      section
      found
      sports
      house
      related
      security
      county
      american
      photo
      members
      power
      while
      network
      computer
      systems
      three
      total
      place
      download
      without
      access
      think
      north
      current
      posts
      media
      control
      water
      history
      pictures
      personal
      since
      guide
      board
      location
      change
      white
      small
      rating
      children
      during
      return
      students
      shopping
      account
      times
      sites
      level
      digital
      profile
      previous
      events
      hours
      image
      title
      another
      shall
      property
      class
      still
      money
      quality
      every
      listing
      content
      country
      private
      little
      visit
      tools
      reply
      customer
      december
      compare
      movies
      include
      college
      value
      article
      provide
      source
      author
      press
      learn
      around
      print
      course
      canada
      process
      stock
      training
      credit
      point
      science
      advanced
      sales
      english
      estate
      select
      windows
      photos
      thread
      category
      large
      gallery
      table
      register
      however
      october
      november
      market
      library
      really
      action
      start
      series
      model
      features
      industry
      human
      provided
      required
      second
      movie
      forums
      march
      better
      yahoo
      going
      medical
      friend
      server
      study
      staff
      articles
      feedback
      again
      looking
      issues
      april
      never
      users
      complete
      street
      topic
      comment
      things
      working
      against
      standard
      person
      below
      mobile
      party
      payment
      login
      student
      programs
      offers
      legal
      above
      recent
      stores
      problem
      memory
      social
      august
      quote
      language
      story
      options
      rates
      create
      young
      america
      field
      paper
      single
      example
      girls
      password
      latest
      question
      changes
      night
      texas
      poker
      status
      browse
      issue
      range
      building
      seller
      court
      february
      always
      result
      audio
      light
      write
      offer
      groups
      given
      files
      event
      release
      analysis
      request
      china
      making
      picture
      needs
      possible
      might
      month
      major
      areas
      future
      space
      cards
      problems
      london
      meeting
      become
      interest
      child
      enter
      share
      similar
      garden
      schools
      million
      added
      listed
      learning
      energy
      delivery
      popular
      stories
      journal
      reports
      welcome
      central
      images
      notice
      original
      radio
      until
      color
      council
      includes
      track
      archive
      others
      format
      least
      society
      months
      safety
      friends
      trade
      edition
      messages
      further
      updated
      having
      provides
      david
      already
      green
      studies
      close
      common
      drive
      specific
      several
      living
      called
      short
      display
      limited
      powered
      means
      director
      daily
      beach
      natural
      whether
      period
      planning
      database
      official
      weather
      average
      window
      france
      region
      island
      record
      direct
      records
      district
      calendar
      costs
      style
      front
      update
      parts
      early
      miles
      sound
      resource
      present
      either
      document
      works
      material
      written
      federal
      hosting
      rules
      final
      adult
      tickets
      thing
      centre
      cheap
      finance
      minutes
      third
      gifts
      europe
      reading
      topics
      cover
      usually
      together
      videos
      percent
      function
      getting
      global
      economic
      player
      projects
      lyrics
      often
      submit
      germany
      amount
      watch
      included
      though
      thanks
      deals
      various
      words
      linux
      james
      weight
      heart
      received
      choose
      archives
      points
      magazine
      error
      camera
      clear
      receive
      domain
      methods
      chapter
      makes
      policies
      beauty
      manager
      india
      position
      taken
      listings
      models
      michael
      known
      cases
      florida
      simple
      quick
      wireless
      license
      friday
      whole
      annual
      later
      basic
      shows`;
      var arrayWords = text.split("\n");
      var arrayList=arrayWords.map(function(a){return a.trim()});
      console.log(arrayList[randNum]);
      return(arrayList[randNum]);
    }
