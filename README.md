Initial app layout
------------------

Uses custom gulp plugin, (gulp-ng-deporder), in order to support spreading angular.modules() over several files etc.

Index.html can be generated server side so that the user profile gets included there (Uses the technique described in https://www.youtube.com/watch?v=62RvRQuMVyg).

homepage.html provided that can serve as an index.html, if generated on server, the server should insert the following (based on whatever condition):

<script>
 var userProfile = {{profile|safe}};
</script>


Follows the hierarchy described in (https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)
