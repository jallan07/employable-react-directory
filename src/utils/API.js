import $ from 'jquery';

const getEmployee = () => {
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
      console.log(data.results[0]);
    }
  });
};

export default getEmployee;
