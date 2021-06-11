var express = require('express');
import Helpers from './helpers/helper';

var app = express();

// set the view engine to ejs , use res.render to load up an ejs view file
app.set('view engine', 'ejs');

// To enable body parameters
app.use(express.urlencoded({ extended: true })); 
 
/**
 * Initial get request of application & Return index page with respective data
 */ 
app.get('/', function(req : any, res: any) {
  const response = new Helpers().getStory('root'); // To fetch the stories of root it exists
  res.render('pages/index', {
    parentId: response.parentId,
    parentText: response.parentText,
    data : response.data
  });
});

/** 
 * Fetch particular story and assign it as a parent and Return index page with data
 */
app.get('/:storyId', function(req :any, res: any) {
	const response = new Helpers().getStory(req.params.storyId);
  res.render('pages/index', {
    parentId: response.parentId,
    parentText: response.parentText,
    data : response.data
  });
});

/**
 * Method to create story
 */
app.post('/', function(req: any,res: any){
  new Helpers().addStory(req.body);
	const response = new Helpers().getStory(req.body.parentId);
	res.render('pages/index', {
    parentId: response.parentId,
    parentText: response.parentText,
    data : response.data
    
  });
});

app.listen(7070);
console.log('Server is listening on port 7070');