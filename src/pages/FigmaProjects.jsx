import FigmaComponents from "../components/FigmaComponents"
import { FaFigma } from "react-icons/fa6";
const FigmaProjects = () => {
  return (
    <div className="grid grid-cols-3 p-8 gap-y-20 gap-x-10">
      <FigmaComponents count={1} link="https://www.figma.com/design/WgRECuJv2Lza8sNaUmbS6t/DeKUT-Student-Portal?node-id=0-1&t=3x0uwC4DYhPGKilX-1" text="Student Portal" projectImage="/design1.jpg" description="A UI design for a revamped student portal" icon={<FaFigma />} ></FigmaComponents>
      <FigmaComponents count={2} link="https://www.figma.com/proto/NFXuIk00E0mpRvzNYYOLNH/MPESA?node-id=102-73&t=g1SDxSK2qGEIkoE6-1&scaling=scale-down&content-scaling=fixed&page-id=102%3A72" text="MPESA App" projectImage="/image3.jpg" description="A UI design for a revamped student portal" icon={<FaFigma />} ></FigmaComponents>
      <FigmaComponents count={3} link="https://www.figma.com/proto/j0fsPxPN9h4MCgLeS4mF5k/HeadPhones?node-id=1-72&t=ZRZohveowOPFcr8Z-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A71" text="E-Commerce" projectImage="/design2.jpg" description="A UI design for an E-commerce website. Your one-stop shop for all electronics." icon={<FaFigma />} ></FigmaComponents>
      <FigmaComponents count={4} link="https://www.figma.com/proto/TgCxtzqwPCqevf54v5b0NZ/NIKE?node-id=8-119&t=kr1pVcZ9OYqIPGHY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2" text="Nike Landing Page" projectImage="/nike.jpg" description="A UI design for a Nike Landing page- A E-commerce platform for you ideal shoes." icon={<FaFigma />} ></FigmaComponents>
      <FigmaComponents count={5} link="https://www.figma.com/proto/MgFDwSfj7EietnQ4kaN0im/Scrolling?node-id=2-7&t=BMQ65H1rneo1PcQ9-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2" text="Food Ordering App" projectImage="/food.jpg" description="A UI design for a revamped student portal" icon={<FaFigma />} ></FigmaComponents>
    </div>
  )
}

export default FigmaProjects
