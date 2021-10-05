$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
	});
	//methods
	$.fn.fullpage.setAllowScrolling(false);
});

new jBox('Tooltip', {
	attach: '.tooltip'
  });

$('#quiz').quiz({
    questions: [
      {
        'q': 'When was Studio Ghibli founded?',
        'options': [
          '1985',
          '2000',
          '1973',
          '1940'
        ],
        'correctIndex': 0,
        'correctResponse': 'You got it!',
        'incorrectResponse': 'Try again!'
    },
    {
        'q': 'What is natsukashii?',
        'options': [
          'A type of ramen',
          'A genre of anime',
          'A Japanese word for nostalgia',
          'The first movie Studio Ghibli produced'
        ],
        'correctIndex': 2,
        'correctResponse': 'That is right!',
        'incorrectResponse': 'Try again.'
      },
      {
        'q': 'Which of the following is not a quality of Studio Ghibli movies?',
        'options': [
          'Attention to detail',
          'Immersive realism',
          'Relatable characters',
          'Fast-paced plot'
        ],
        'correctIndex': 3,
        'correctResponse': 'You are doing great!',
        'incorrectResponse': 'Nope, try again.'
      },
      {
        'q': 'Which is not one of the three qualities of a well-developed character?',
		options: [
          'Depth',
          'Humor',
          'Personality',
          'Clear motivations'
        ],
        'correctIndex': 1,
        'correctResponse': 'Well done!',
        'incorrectResponse': 'Come on, you can do better!'
      },
	  {
        'q': 'The film that caused Studio Ghibli\'s breakthrough was:',
		options: [
          'Howl\'s Moving Castle',
          'Spirited Away',
          'My Neighbor Totoro',
          'Kiki\'s Delivery Service'
        ],
        'correctIndex': 3,
        'correctResponse': 'You got it!',
        'incorrectResponse': 'Nope.'
      }
    ]
  });


  
  