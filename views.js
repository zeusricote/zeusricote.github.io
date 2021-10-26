
jade = (function(exports){
/*!
 * Jade - runtime
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Lame Array.isArray() polyfill for now.
 */

if (!Array.isArray) {
  Array.isArray = function(arr){
    return '[object Array]' == Object.prototype.toString.call(arr);
  };
}

/**
 * Lame Object.keys() polyfill for now.
 */

if (!Object.keys) {
  Object.keys = function(obj){
    var arr = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key);
      }
    }
    return arr;
  }
}

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    ac = ac.filter(nulls);
    bc = bc.filter(nulls);
    a['class'] = ac.concat(bc).join(' ');
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function nulls(val) {
  return val != null;
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 * @api private
 */

exports.attrs = function attrs(obj, escaped){
  var buf = []
    , terse = obj.terse;

  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;

  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if (0 == key.indexOf('data') && 'string' != typeof val) {
        buf.push(key + "='" + JSON.stringify(val) + "'");
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + exports.escape(val.join(' ')) + '"');
      } else if (escaped && escaped[key]) {
        buf.push(key + '="' + exports.escape(val) + '"');
      } else {
        buf.push(key + '="' + val + '"');
      }
    }
  }

  return buf.join(' ');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){
  return String(html)
    .replace(/&(?!(\w+|\#\d+);)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno){
  if (!filename) throw err;

  var context = 3
    , str = require('fs').readFileSync(filename, 'utf8')
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

  return exports;

})({});

jade.templates = {};
jade.render = function(node, template, data) {
  var tmp = jade.templates[template](data);
  node.innerHTML = tmp;
};

jade.templates["admin"] = function(locals, attrs, escape, rethrow, merge
/*``*/) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="top-line"></div><div class="wrapper"><div class="options onMobile"><button data-action="draftsActive" class="btn">Drafts</button><button data-action="postsActive" class="btn">Posts</button></div><div class="left-pane"><div class="main-title"> <div class="text">Potion<div class="busy hidden"></div></div><div class="subtext">Editor for Jekyll blogs</div></div></div><div class="center-pane"><div class="clearfix"><h4 class="f-left">Drafts</h4><div class="newpostholder"><input id="newPostTitle" placeholder="New post title"/><button id="newPostBtn" class="btn f-right">New Post</button></div></div><ul class="block drafts-list">');
// iterate drafts
;(function(){
  if ('number' == typeof drafts.length) {
    for (var $index = 0, $$l = drafts.length; $index < $$l; $index++) {
      var file = drafts[$index];

buf.push('<li class="file"><a');
buf.push(attrs({ 'href':("#"), 'data-draft':("true"), 'data-path':("" + (file.path) + "") }, {"href":true,"data-draft":true,"data-path":true}));
buf.push('>' + escape((interp = file.name) == null ? '' : interp) + '</a></li>');
    }
  } else {
    for (var $index in drafts) {
      var file = drafts[$index];

buf.push('<li class="file"><a');
buf.push(attrs({ 'href':("#"), 'data-draft':("true"), 'data-path':("" + (file.path) + "") }, {"href":true,"data-draft":true,"data-path":true}));
buf.push('>' + escape((interp = file.name) == null ? '' : interp) + '</a></li>');
   }
  }
}).call(this);

buf.push('</ul></div><div class="right-pane"><ul class="published-list">');
// iterate posts
;(function(){
  if ('number' == typeof posts.length) {
    for (var $index = 0, $$l = posts.length; $index < $$l; $index++) {
      var file = posts[$index];

buf.push('<li class="file"><a');
buf.push(attrs({ 'href':("#"), 'data-path':("" + (file.path) + "") }, {"href":true,"data-path":true}));
buf.push('>' + escape((interp = file.name) == null ? '' : interp) + '</a></li>');
    }
  } else {
    for (var $index in posts) {
      var file = posts[$index];

buf.push('<li class="file"><a');
buf.push(attrs({ 'href':("#"), 'data-path':("" + (file.path) + "") }, {"href":true,"data-path":true}));
buf.push('>' + escape((interp = file.name) == null ? '' : interp) + '</a></li>');
   }
  }
}).call(this);

buf.push('</ul></div></div>');
}
return buf.join("");
}
jade.templates["choose"] = function(locals, attrs, escape, rethrow, merge
/*``*/) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="top-line"></div><div class="wrapper"><div class="main-title"> <div class="text">Potion<div class="busy hidden"></div></div><div class="subtext">Editor for Jekyll blogs</div></div><div class="login-div"><h3 class="title">Select Repository and Branch</h3><select id="reponame" autofocus="autofocus" class="repos">');
// iterate list
;(function(){
  if ('number' == typeof list.length) {
    for (var $index = 0, $$l = list.length; $index < $$l; $index++) {
      var repo = list[$index];

buf.push('<option');
buf.push(attrs({ 'value':("" + (repo.full_name) + "") }, {"value":true}));
buf.push('>' + escape((interp = repo.name) == null ? '' : interp) + '</option>');
    }
  } else {
    for (var $index in list) {
      var repo = list[$index];

buf.push('<option');
buf.push(attrs({ 'value':("" + (repo.full_name) + "") }, {"value":true}));
buf.push('>' + escape((interp = repo.name) == null ? '' : interp) + '</option>');
   }
  }
}).call(this);

buf.push('</select><input id="branchname" placeholder="Branch Name" value="master"/><div class="full-row"><button id="continue" class="btn">Next</button></div></div><br/><div class="notice"></div></div>');
}
return buf.join("");
}
jade.templates["editor"] = function(locals, attrs, escape, rethrow, merge
/*``*/) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="top-line"></div><div class="wrapper"><div class="left-pane"><div class="main-title inleft"><div class="text">Potion<div class="busy hidden"></div></div><div class="subtext">Editor for Jekyll blogs</div></div></div><h2 class="title">' + escape((interp = title()) == null ? '' : interp) + '</h2><div id="editor"><textarea id="textpad">' + escape((interp = data) == null ? '' : interp) + '</textarea><div class="preview"></div></div><div class="top-right controls">');
if ( isDraft() == true)
{
buf.push('<div class="btn save">Save Draft</div><br/><div class="btn publish">Save and Publish</div>');
}
else
{
buf.push('<div class="btn save">Save &amp; Publish</div><br/><div title="Will Move Post to drafts" class="btn unpublish">Unpublish</div>');
}
buf.push('<br/><div title="Go back to admin page" class="btn admin">Admin</div><br/><div class="btn previewbtn">Preview</div></div></div>');
}
return buf.join("");
}
jade.templates["login"] = function(locals, attrs, escape, rethrow, merge
/*``*/) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="top-line"></div><div class="wrapper"><div class="main-title"> <div class="text">Potion<div class="busy hidden"></div></div><div class="subtext">Editor for Jekyll blogs</div></div><div class="login-div"><h3 class="title">Hi, there.</h3><input id="username" autofocus="autofocus" type="text" placeholder="Username"/><input id="password" type="password" placeholder="Password"/><div class="full-row"><button id="login" class="btn login-submit">Sign In</button></div><br/><div class="notice"><h4>Note</h4><p>Please enter your github credentials.\nYour credentials are not stored anywhere, \nthey are directly sent to api.github.com \nvia https+digest md5. You can leave your password\nblank for a read-only (public repository) demo.\nYou can find the source code to review on \n<a href="https://github.com/captn3m0/potion">github</a>.</p></div></div></div>');
}
return buf.join("");
}