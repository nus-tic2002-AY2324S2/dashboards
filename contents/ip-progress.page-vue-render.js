
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://nus-tic2002-ay2324s2.github.io/website","title":"Home"}},[_c('span',{staticClass:"badge rounded-pill bg-warning text-dark }}"},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}})]),_v(" Go to TIC2002 main site")])])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/dashboards/index.html"}},[_c('span',[_v("Dashboards home")])])]),_v(" "),_c('li',{attrs:{"tags":"m--cs2103 m--cs2113 m--tic2002 m--tic4001 m--tic4002"}},[_c('a',{staticClass:"nav-link",attrs:{"href":"/dashboards/contents/participation.html"}},[_c('span',[_c('strong',[_v("Participation dashboard")])])])]),_v(" "),_c('li',{attrs:{"tags":"m--tic2002"}},[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-tic2002-ay2324s2.github.io/ip-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByRepos&breakdown=true&checkedFileTypes=java~md~fxml~sh~bat~gradle~txt"}},[_c('span',[_c('strong',[_v("Project dashboard")])])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('p'),_v(" "),_m(0),_v(" "),_c('box',[_c('ul',[_c('li',[_v("Details about iP grading are "),_c('a',{attrs:{"href":"https://nus-tic2002-ay2324s2.github.io/website/admin/ip-grading.html"}},[_v("here")]),_v(".")]),_v(" "),_c('li',[_v("Note that the progress shown here is just a rough guidance as it was generated by an automated script. "),_c('mark',[_v("A manual inspection will be done after the final submission")]),_v(" to confirm the script's findings.")]),_v(" "),_c('li',[_c('strong',[_v("If an increment you did does not appear as 'done' in the dashboard")]),_v(", make sure you have pushed the corresponding tag to your fork and the tag matches the increment name exactly. You can even tag past commits if you forgot to tag those commits earlier or the tag you used differs from the expected tag. The increment will be marked as 'done' at the next script run (it runs once a day). Contact the teaching team "),_c('mark',[_v("only if the problem is not rectified even after the next update")]),_v(".")]),_v(" "),_c('li',[_v("Meaning of colors/icons:\n"),_c('ul',[_c('li',[_c('span',{staticClass:"dimmed"},[_c('span',[_c('span',{staticClass:"fas fa-info-circle",attrs:{"aria-hidden":"true"}})])]),_v(" : you can click on this icon to find more info")]),_v(" "),_c('li',[_c('span',{staticClass:"badge bg-success"},[_v("ABC")]),_v(" : you have done the corresponding item.")]),_v(" "),_c('li',[_c('span',{staticClass:"badge bg-info"},[_v("ABC")]),_v(" : you have done the corresponding item which is an optional item (well done!).")]),_v(" "),_c('li',[_c('span',{staticClass:"badge bg-danger"},[_v("!"),_c('s',[_v("ABC")])]),_v(" : item overdue, not done yet.")]),_v(" "),_c('li',[_c('span',{staticClass:"badge bg-dark"},[_v("!"),_c('s',[_v("ABC")])]),_v(" : item due soon, not done yet.")]),_v(" "),_c('li',[_c('span',{staticClass:"badge bg-secondary"},[_v("!"),_c('s',[_v("ABC")])]),_v(" : optional item due soon, not done yet.")])])]),_v(" "),_c('li',[_v("If you have queries about the data shown in this page, please email "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tic2002@comp.nus.edu.sg")]),_v(".")]),_v(" "),_c('li',[_v("This dashboard is "),_c('strong',[_v("updated daily")]),_v(".")]),_v(" "),_c('li',[_c('strong',[_v("Troubleshooting:")])])]),_v(" "),_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Why is an increment related to a "),_c('em',[_v("tag")]),_v(" not green?")])]},proxy:true}])},[_v(" "),_c('p',[_v("Try these steps, and wait till the next dashboard update to see if they turn green as expected.")]),_v(" "),_c('ol',[_c('li',[_v("Go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("https://github.com/YOUR_USER_NAME/ip/tags")]),_v(". It should look like this:"),_c('br'),_v(" "),_c('pic',{attrs:{"src":"/dashboards/contents/images/tag-list.png"}}),_c('br'),_v("\nConfirm the tag in question is listed there. If it is not listed, here are the possibilities:\n"),_c('ul',[_c('li',[_v("You created the tag but never pushed it."),_c('br'),_v("\nRemedy: You need to push the tags (pushing a branch doesn't automatically push tags in it).")]),_v(" "),_c('li',[_v("You might have mixed up commit messages and tags, and used the tag name as a commit message instead)."),_c('br'),_v("\nRemedy: Create the tag")])])],1),_v(" "),_c('li',[_v("If the tag in question appears in the list, click on the commit hash shown just below it (e.g. "),_c('span',{staticClass:"badge badge-light text-secondary"},[_c('svg',{staticClass:"octicon octicon-commit",attrs:{"version":"1.1","width":"24","height":"24","viewBox":"0 0 24 24","aria-hidden":"true"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M17.5 11.75a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75zm-17.5 0A.75.75 0 01.75 11h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75z"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M12 16.25a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z"}})]),_v(" b6e91a0")]),_v("). This brings you to a page containing commit details.\n"),_c('ul',[_c('li',[_v("Confirm the commit is in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v("branch. An example is shown below. Only tags in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch are detected by the dashboard."),_c('br'),_v(" "),_c('pic',{attrs:{"src":"/dashboards/contents/images/commit-details.png"}}),_c('br'),_v("\nRemedy: Wait till the branch that has the tag is merged to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch, push the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch to the fork.")],1),_v(" "),_c('li',[_v("Ensure a warning message like the following doesn't appear at the top of the page."),_c('br'),_v(" "),_c('pic',{attrs:{"src":"/dashboards/contents/images/orphan-commit-warning.png"}}),_c('br'),_v("\nIf it does, most likely you pushed the tag to the fork, but not the commit it belongs to."),_c('br'),_v("\nRemedy: Push the commit to the fork, and confirm the warning does not appear anymore.")],1)])])])]),_v(" "),_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Why is an increment related to a "),_c('em',[_v("branch")]),_v(" not green?")])]},proxy:true}])},[_v(" "),_c('ol',[_c('li',[_v("Go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("https://github.com/YOUR_USER_NAME/ip/branches/active")]),_v(". It should look like this:"),_c('br'),_v(" "),_c('pic',{attrs:{"src":"/dashboards/contents/images/active-branches.png"}}),_c('br'),_v("\nConfirm the branch in question is listed there. If it is not listed, push the branch to the fork.")],1),_v(" "),_c('li',[_v("Note the numbers "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n|m")]),_v(" shown for each branch. If the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("m")]),_v(" is not zero, that means the branch is ahead of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch by that number of commits, and hence, not considered "),_c('em',[_v("fully")]),_v(" merged (only merged branches are detected by the dashboard). Reasons:\n"),_c('ul',[_c('li',[_v("You did not push the branch after merging it."),_c('br'),_v("\nRemedy: After merging a branch to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch, you need to push "),_c('em',[_v("both")]),_v(" branches to the fork.")]),_v(" "),_c('li',[_v("You pushed commits to the branch after merging it to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch."),_c('br'),_v("\nRemedy: Either delete those extra commits from the branch (both locally and in the fork) or merge the branch to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch again.")])])])])])],1),_v(" "),_m(1)],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(2)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{staticClass:"display-4",attrs:{"id":"ip-progress-dashboard"}},[_v("iP progress dashboard"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ip-progress-dashboard","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',[_c('p',[_c('span',{staticClass:"dimmed"},[_v("[We have not started updating this dashboard yet]")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.3.0")]),_v(", generated on Sun, 10 Mar 2024, 22:35:39 GMT+8]")])])])}
}];
  