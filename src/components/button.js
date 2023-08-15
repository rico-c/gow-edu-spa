import {Button} from 'antd'

export const MainButton = ({children, ...props}) => <Button
  {...props}
  className="bg-white w-full lg:w-auto flex items-center"
  style={props.disabled ? {} : {background: "#f05622", color: "#fff", border: 'none'}}>
  {children}
</Button>