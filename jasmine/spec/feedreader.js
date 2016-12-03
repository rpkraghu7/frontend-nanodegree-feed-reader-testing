/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL is defined', function(){
           var num = allFeeds.length;
           for(var i=0;i<num;i++){
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url).not.toBe('');
           }
         });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Name is defined', function(){
           var num = allFeeds.length;
           for(var i=0;i<num;i++){
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name).not.toBe('');
           }
         });

    });


    /* This test suite has the test to be done menu */
describe('Menu',function(){

  /* This test ensures the menu element is
  * hidden by default.*/

  it('is hidden by default',function(){
    var div= $("body").hasClass('menu-hidden');
    expect(div).toBe(true);
  });


  /* This test ensures the menu changes
  * visibility when the menu icon is clicked. This test
  * has two expectations: does the menu display when
  * clicked and does it hide when clicked again.
  */
  it('changes visibilty',function(){
    $('.menu-icon-link').trigger('click');
    var div= $("body").hasClass('menu-hidden');
    expect(div).toBe(false);

    $('.menu-icon-link').trigger('click');
    var div= $("body").hasClass('menu-hidden');
    expect(div).toBe(true);

  });
});

    /* This test suite is for checking the Initial Entries */
describe('Initial entries',function(){

  beforeEach(function(done){
    loadFeed(0,function(){
      done();
    });
  });

  /* This test ensures when the loadFeed
  * function is called and completes its work, there is at least
  * a single .entry element within the .feed container.
  */
  it('there is atleast element  in the feed container',function(done){
    var entryLength= $('.feed .entry').length;
    expect(entryLength).not.toBe(0);
    done();
  });
});
// This test suite ensures the new feed is loaded
describe('New Feed Selection',function(){
  var entry1, entry2;
  /* This test ensures when a new feed is loaded
  * by the loadFeed function that the content actually changes.
  */
  beforeEach(function(done){
     $('.feed').empty()
    loadFeed(0,function(){
      entry1 =$('.feed .entry').text();
      loadFeed(1,function(){
        entry2= $('.feed .entry').text();
        done();
      });
    });

  });

  it('changes the content',function(done){
    expect(entry1).not.toEqual(entry2);
    done();
  });
});
}());
