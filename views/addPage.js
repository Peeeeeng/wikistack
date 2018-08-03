const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html `
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div><div class="form-group">
    <label for="author" class="col-sm-2 control-label">Author Name: </label>
    <div class="col-sm-10">
      <input id="author" name="author" type="text" class="form-control"/>
    </div>
    
    <div><label>Author Name: </label><input id="email" name="email" type="text" class="form-control"/></div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div><input id="content" name="content" type="text" class="form-control"/></div>
    
    <div>
      <form>  
        <fieldset>
          <legend>Status</legend>
          <div><input type='radio' id='open' checked><label for='open'>Open</label></div>
          <div><input type='radio' id='closed'><label for='closed'>Closed</label></div>
        <fieldset>
      </form>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      
    <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);