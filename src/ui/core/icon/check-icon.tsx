import Icon, { IconProps } from './icon'

export default function CheckIcon(props: Partial<IconProps>) {
	return (
		<Icon {...props}>
			<path
				d='M31,16c0,8.3-6.7,15-15,15S1,24.3,1,16S7.7,1,16,1S31,7.7,31,16z'
				className='CompoundIcon-outer'
			/>
			<path
				d='M13.4,22.1c-0.3,0-0.5-0.1-0.7-0.3l-3.9-3.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3.1,3.1l8.1-8.1c0.4-0.4,1-0.4,1.4,0   s0.4,1,0,1.4l-8.9,8.9C13.9,22,13.7,22.1,13.4,22.1z'
				className='CompoundIcon-inner'
			/>
		</Icon>
	)
}
