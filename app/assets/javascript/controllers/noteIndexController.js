angular.module('NoteWrangler').controller('NoteIndexController', ['Note', '$scope', function(Note, $scope) {
    $scope.notes = Note.query();
    
    console.log($scope.notes);
}]);