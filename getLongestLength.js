const getLongestLength = (str) => {
  let unique_str = '';
  let max_length = 0;

  for ( let i = 0; i < str.length; i++ ) {
    const char = str[i];
    const char_pos = unique_str.indexOf( char );
    if ( char_pos >= 0 )
      unique_str = unique_str.substr( char_pos + 1 );

    unique_str += char;
    max_length = Math.max( unique_str.length, max_length );
  }

  return max_length;
};