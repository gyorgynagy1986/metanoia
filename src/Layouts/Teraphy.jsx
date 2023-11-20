import Sections from "@/components/Sections/Sections";
import { section_1 as section } from "@/data/data";
import sectionPhoto from '../../public/assets/Frame_2.svg';
import withSectionProps from '@/app/hooks/withSectionProps';

const styleMody = 'th'

const Teraphy = withSectionProps(Sections, section, sectionPhoto, styleMody);

export default Teraphy;