import Avatar from '@mui/material/Avatar';

function stringToColor(string: string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name: string) {
  const nameArr = name.split(' ')
  const char1 = nameArr[0][0]
  let char2 = ""
  if (nameArr.length > 1) {
    char2 = nameArr[1][0]
  }
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${char1}${char2}`,
  };
}

interface UserIconProps {
  name: string;
}

const UserIcon = ({ name }: UserIconProps) => {
  return (
    <Avatar aria-label={name} {...stringAvatar(name)} />
  )
}
export default UserIcon;