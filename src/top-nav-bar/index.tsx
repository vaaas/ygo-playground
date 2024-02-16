import { Flex } from '../components/flex.tsx';

export function TopNavBar() {
	return <Flex as='nav' justify='center'>
		<a href='#'>Home</a>
		<a href='#'>Manage packs</a>
	</Flex>
}
