const slug = (string) => {
  let result = string;

  if (string) {
    result = result.replace(/^\s+|\s+$/g, ''); // trim
    result = result.toLowerCase();

    // remove accents, swap ñ for n, etc
    const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i += 1) {
      result = result.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    result = result.replace(/[^a-z\d -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
  }

  return result;
};

export default slug;
