interface IIconProps{
  className?: string
  name: string
}

const Icon = ({className, name}: IIconProps) => {
  return (
    <>
      {className
        ? (
          <span className={`material-icons ${className}`}>
            {name}
          </span>
          )
        : (
          <span className='material-icons'>{name}</span>
          )}
    </>
  )
}

export default Icon
