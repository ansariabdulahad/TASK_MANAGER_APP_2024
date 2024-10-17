import { Button, Empty } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='flex flex-col space-y-4 items-center justify-center h-screen bg-light'>
            <Empty className='shadow-sm text-2xl text-center'
                image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhURExEWFRUXFRoaFhgXGBUYFhgVGBcXGBgWFRUYHCkgGBwlGxYVIT0hJykrLjAuGR82ODMtNygtMCsBCgoKDg0OGhAQGi8lHiUtLS8vKy0tLS0tLS0tLS0tLS0tLS0tLi0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEEBQcIAgP/xABNEAACAQIDBAYFBwcJBwUAAAABAgADEQQSIQUGMUEHEyJRYXEUMoGRoUJSYnKxwdEjM1NzgpLwFyRDY5Oio7LxCBVVg9Ph4xaks8LS/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAKBEBAAICAQMEAQQDAAAAAAAAAAECAxEhBBIxE0FRYSJxkaHwFDKB/9oADAMBAAIRAxEAPwDeMREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARPnXrrTUs7BVGpZiAAO8k8JBdvdLezcNdabtiXHKiLpf9a1lI8ry1aWt4hEzEeU+iaA2z01Y2pcYelSw695vVqed2so/dMhm1d6toYgkV8ZXbkVzFF8jTSy/Cb16W8+eGc5YdRbQ25hcPrWxNGl9eoi/AmR3GdKOyaWhxgY/wBWlVx+8qkfGc0UaBbMVF7KWbh6o4k+8Tw1uV+HPv5zSOmr7yrOafh0FiemvZy+rTxFTypoB/fcH4TH1unTDD1cHXP1mpr9hM0ZAEn0KK+rZupunZOWAb21l/8AxKDp2X/h7W/XD/pzSpEX5R6NPg9Szd9Pp2o/KwNQeVRD9oEvKHTjgT62HxK/s0mH/wAk0HPdKlmzdpVspPaNr2+Svex7pWcNExks6SwfS5smpYHENTJ+fSqj3lVIHvkk2bvPgsT+ZxdCoe5aiFvat7iciw+vG3uHLSUnDHstGV2feVnI+yN7MfhPzGMrIB8nNmT+ze6/CT/YHThiadlxeHSsvN6X5Op5lTdWPllmU4pheMkS3zEjO6+/eA2jZaFcCp+iqdip7FPreakiSaZzGlyIiAiIgIiICIiAiIgIiICIiAiJHt8d8MNsulnrNd2v1dJbZ3I7u5e9joPPSTETM6hEzpnMViUpI1So6oii7MxCqoHMk6ATVW9vTNSp3p4Gn1rcOte4pD6qaM/noPOax3w3zxW03vWfLTBulFbimvcSPlt9I+y3CRyd2PpYjm7C2b4ZfbW8uJxzM2KqvWuOwC2VEa4OYU1GXhccBxvfSYeVMpOrURHDGZmSelUk2AJPhrPMzW7W1Ewj1nYsc2HKLkZ6ZLmpRa3WJ2k0VtfC3OVtPHCYhhgtweGn8aTzJ3gtpYHFFWrJT9Jq1ixBQhVZjVFnJUZ6etE61GJ17IPG33iq7Pp08RRRKZr5kAZLhc3V4fMaRCEZQ617qXX1uDaZc+/nWl+z7Q08OGv8W09/vnkyV4XaGAy0lanTDIiXc0nINQ4fEK5rAA9YgrejG1jcZrA6xtPa2ENTCmiAtOjinYr1ZB6s1abhhcaqbPZL3GgtI7p34O37RmpQIGb5OYqNQDcAH1L5gLEakW5cQZ8ZNsXtTZ9cFqgXrKj1Sz9U+dXcYodbUYDtoC+FIUXIyHTv8PtDZYOTqlZLqSwpuHOVsJorGxUMq4vT6Q7xK90/Ce2PlDmGg4+7x5HnPEzm9uOpVqlI0mVlSgqEojU0zB6hORGAIFmEwltOPs9//b3xvhWY1KkGVzaW/D7ZWnSZjZVLGxNgCTZVLMbDkFBJPIAmRI8aW4634W0t53+6UMQZWUgNiCNCDcEaEEcCDyM2VuP0u4nCFaWLLYihoMx1roO8N/SDwbXx5TWk+laoahaoxFy129UXLEk2UW0v3Cw8JnaInytEzDsLY21qOMpLXoVFqU24MPiCOKkcwdRL2co7h7519lVw6XakxHXUr6OO9e5wOB9h0nUWx9p0sXRp4ii+enUXMp8O4jkQbgjkQZhaum1bbXkREqsREQEREBERAREQERLbaONTD0nrVGypTUsx7lUXMDA7+74UtlUOsaz1XuKNO/rNzJ7kFxc+Q4kTmrbW06+LqtiK7l3c8TwsOCoOSjhYS83v3iq7SxT4mpcA6U05U6YPZTz5k8yTMRTK2a9727NrWzZl9a41GXNwtrblcH1MOGMcfbkyX7p17PBlRa3O/wALeXuhRcgXtrxPAeJnmbswwtufwm0d1+h58XhaWJqYoUjVTME6osVUnsEt1i6lbG1ucwPSHuMmyBSHpfXVKpNk6rJZF4sTnbmQLW7+6Y+tSZ7YnleaWiNoXERLqvdRgQoC2IHaNycxzE5rHhoVFvo35zzSpsxCqpZjwVQST5AambA3C6OKuPC4jEFkoaZFBtUqrfipPqU+OvE8hzm6dkbHwmATJQpJT01yDtN9d/WY/WJnPkzxXiOWtccz5c5YfcvaVQZlwGIt402X4NYyz2lu9jMMCa2ErUwOLNTcL+/bL8Z09Xr5tMoA8OPvnzVyOBt7bTH/ACJ+Gnow5TNuRvKKRfUXE3ttzc/B7QDO1NcPVN8lWkoF+5q1MWVwTrfRrEazTu8m79fZ9bqa6i9roy6pUT5yNzHhxHOa1yRZnak1YqUlZSWlQlQt7+AufeB98++Awr16lOhTW71HVV46sxCgHwv9828OgY/8R/8Ab/8AmmdrxHlatZnw0xbS+nH2yhma3w2KmAxdTCpX6/q7BnyZBnIuVC5m4XAvfjfumFMhOtKSrsSbk3J4k8ZUWseN+Xd43N/KeTIFJt3oA3mKVn2c7dioDUo35VFHbUfWUZrfQPfNQzNbm440Mfg6q6FcRTBtzVnCtfzViJlaOFqzqXXcRExbkREBERAREQEREBNSdPm8BSlSwKGxq/lKtv0aHsKfN9f+X4zbc5g6Utp+k7UxLXutNuqXwFIZSP3859s6elp3X38M8s6qikrbTjr3Q1uX8G2vxvKT0nGGZ3cbd87RxtLDW7BOaqe6kur68r6LfvYTBW5zfPQTu71OGfGuO3XNkvyoodD+02Y+ICzLNfsptpjruWzgoUWFgAPIAD7BOWukLeH/AHhjqtcG9MHJR/VJcAj6xzN+1N4dL+8PoeAdEa1WvemmoBCkflGHkunmwnNIcd4nN0tPNmua3tD2xuSbAeA4DyvJl0X7qDaOJvUW9CjZnB4OxvkpnwNiT4KRzkMnQ/RFs4YbZtOpbtVc1VvEubJ/hrT95mue/bThTHXcphWrCmMi8fs8h/Fpg8bg6pJajW6ot610FRT9KxIs3jex5iR/effylhXNJE66qPX1yop7i1jc+AHtkRxfSNjWvkFKmOVkLH3uSPhOKuOZdE2iGxF2LUP5zHYlvqmlTHsCID8Z6XYC37WIxLrzRqzFW8GHEjwvY85qapvhj244t/YEX/Konyp7wY5yFXE4hmPAK7knyAOst6Uq98N04xNQZh94tiJtDDthqlg3Gi5/o6ttD9U8CO7xAmsa28W0KJAevWU2DAVLm6ngcrg3B1k63N3l9NVlcBaqWzW4Mp0zL3a8R5d8iaWrymLRZo/FUGps1N0KujFXBto6kgj2Wtz4TygXK182bTLYDLx7WYk3GnC0mvTBs8U8cKwFhXpK5/WKTTf/ACKf2pCKdMsQqglmICgcSSbADxJ0nTE7jbCY1Om0+gTdzrsS+OcdigMlPuNZxqf2UP8AfHdNx727cXAYStimserQ5QflVD2UX2sVE+O4+wBs7BUcMLZlW9Q/Oqt2nPlckDwAmqv9oHeTNUpbPRtKdqtb67C1NT5KS1vprOWfzu3/ANatS4qqzuzu2Z3JZm0N2btEm3O5OnKfIygYd8qRznQxe65XMcgYLfshiC1vpEAAn2TwFv8A6gfbKQZWR5mU3Ww5qY3C0wNWxNEf4i3PuuZYU6pUMFYjOMrAc1zKwB7xmUG30RNh9BOwjiNoekEdjDIWvy61wUQe7Of2RM7eFqxy6NiImDciIgIiICIiAiIgJx9tKv1larU+fVdv3nLffOwZx/jKQp1K1Mgkq7KDe2UrUsSRbtaBhbTjflY9vR+Z/wCMM/iFrEqW0tKTuczJbt7HfHYmjhUveo4BI+Sg1d/2VDGdY4PCrRppSRcqIoVQOSqLAe4TT3+z9sdG9Ixh1ZSKKfRBAdz7boPYe+bd2rTqvRqLRZUqshCM17KxFgxA424+yed1V+6/b8OvFXVdtEb7bw+nbdw6qb0qGKo0k7iwrJ1je1tPJBN+9QnzV9wmmtj9DGJoYijWOLpMKdanUIyvchHViLnmbTdMrmtX8YrPhakTztyFtu3pFfv9Iq+VusadC7BrlNj0HTUrhKZHmuHUge8TUfSTuRV2a3XvWRxXrVCoUMCtyX1J48bTY3RdtIYjZlJDYmkWpOPq3yf4bJ7jNc8xakTClOLTDUGYnUkknUnmSdSfOT9tnoGaicNS9DFK/pFwGuouGNdeJzmxsJB8fhDQq1KJ/o3ZP3SQD7QAZ4698uTO2X5uY5dTc9nhx1lqy5s2Gb61Ov75/WPZ8hM1uri0p1HzOKbPTK06hW/V1GICve/ZtrrMZhMJUrNlpoztYmyi5sOJsPMTzisO9JzTdSrKbEHiOcRwvkit4mm2c3kxS+j0qLYgYiqHZi6kMAlioQue0TfW3DXynro3J9NH6p7+XZ++0jLGS7owo3xTv82if7zLb7DKZJ4lbDjikahXpr44Pvy1vdmpW++W/Qlu96XjuvZb0sKM/Aa1m0prfnazN4FR3yx6XdoCrjRSB0oUlQ/rGJqN/nUeybm6ItkJhtmUCurVlFZz3tUAIHsXKvslLT244a63dJ9r7RTC0KmIqGyU0Z28lF7DxPD2zR/Q1j3xm2cRiKti1XD1XYcQCatGyjwAsB4CbR6R928RtPCjC0ayUlZw1QuGOZV1VQB9LKf2RI90b9G1fZeKOIqYinUU0GphVVgRmdHvry7J98yrMRWfled7hnulKio2TjCFH5ruHzlnLZPKddb37HbHYOvhVYKaqZQTew1B1t5Tl/fHd5tm4p8K7q5UKcy3tZlzAa+cvin2UyQwkGVVraieuq7IbMLlsuXXPwBzWtaxvbje/KaSzMNQeq600Us7sFVRqWZjYAeJJE6p6O91l2Xg0oaGo3brMPlVWAuB4KAFHl4yJdEHRz6GBjsUn84YfkkP9CpGpP8AWEH2A24kzak57222pXRERKLkREBERAREQEREBOWukfZxw+08WlrA1TUHlV/KfaxHsnUs0p/tAbFKvQxqjssOqqfWW70yR5GoL+AnT0ttX18sssbq1BEqtuf8HlKT0nI2j0Sb8YPZmHrU8SzhnrZ1yozDLkReI4agydfyw7K/SVf7Gp+E50M916zOczG5sByGigKBp4ACc9+npady2rlmI06OwXSxsytUSklSrmqOqLek4GZ2Ci5PDUiTi85B2Nilo4mhWYErTrU3a3HKlRWNgedhN5fy3bO/QYv9yj/1pzZen1MdkNaZYmOUR6Zd7sLjxRo0GctRrVOsuhUDTLoTodQZH+jvehMBimViRhqxysWtdLE9XUa2mlyDbkSeQEi+0qvWValUAhXq1GW45M5a3dexE9Y7Ztahl62i9POLrnUrmHeL+ydUY6xXtZTae7bZXSdsNkq+mIL0qgXORqFcAAMfosMuveD3iQiZzcjf9sKowuJQ1sOeyOBemp0KgNo6fRPDl3SUNufs/HqauAxQQ/MXtoD3GkxD0/K4HhOad04nw04tzCO7vh3wuKp0r9aTTKhSodluc4HyiLDUCfLex36vCpUJ61aJDhmzOO1dc2mlx4n4XN5U3Bx1Nr06tE24HPVpt3HQIbe+ffCdHWKqG9avTXvyZ6rWH0mC2085M5a6YR08+p3/AHv+NfshaKWIVQWZjZVAuSTyA5mbFwCpsPBPiK1jXqHsp85wDkpA81W5Zj4m3KfGrtDZmxger/nGJsRowZ76XD1AMtJeF1UX8Jr3b21cRtGsKr3Zj2UpqDamPmovdzvxPOViJv58N5mK/qxWKqO7s9QkuzFmJ4lmOYk27ybzeW6PSns3DYLDYepUqB6dBEcCk5GZVANiBrrIpuNuCjK1bGJm5JTuQAeJLlSLkC2gNtfd8N7ujY01atg8zqNWonVwOZpt8sfROvcTwk3mlp7ZKxaI22T/ACx7J/SVf7Gp+Ey+7HSBgdpVjQw7uXCFyGpsoygqp1PiwnOOzd1MdiRmo4Sq68jbKCO8FiLjykr3EqVtg4t8VjcHiBTNBqd0RWsWem12OYKBZDz7pnbHXXHlaLz7w6A21tSng6FTE1SRTpi7EAk2uBoBx4zmXpH2xT2ltF6+GzurqgUZGDEqgBAS1+Unu+nS1gcbgcRhadHEq9WnlUulIKDcHUioTy7pedHu76YPC06mX8tWQPUYjtAMLrTB5AAjTmb+Fq1jt5lM/lxDTGN2RiKAzVcPVRdO09Ooq68rso77Tc3RB0bdSE2hjE/KnWhSYfmxyqOD8s8gfV48eEvwp7VuREzeExxBs2o7+Y/GRa8zBFIhlYgRM1yIiAiIgIiICIiAiIgJgN9NmUsbhKuFc2Lr2Ta+Vxqj+xgPZeZbHYjIunE8PxmEq1LAk/6mWruJ3A1M3RSuW3phz9/Vdi/lnvaQXb2xq+CqGhWFuDKQbo41AZT7x3jWdAyHdKmzRVwgqfLosWHf1ZADjy9U/szrxdRabasxvijXDThhR429+vhpKhSeA/0AufhLvY2zHxdenh6Y7TtYdwHEsfAAEztmdOaIfLA4CriHFOjTaox5KCT7e4eJkiTo72iRc0VU/NNSnm+Bt8ZvDYexMPsqgtKigzkXZjqzHmzH7vulKjliSTcnjOG3VTM/jDprhj3Qroy3ESh/OsYgNZWtTpEhhTt8trXBY8RxsLc+E13j2TTx1I06qK3Nbj1WAsCOY7tJbbNq2cDk2nt1I+8e2ZiYWvNrdzSKxEaaO2juaq1zSpsyMFu2btBb6LbgTezc+AmPbc+vSYMlVL3spBdWBIOoIBtw75vXaGzadcdoWPJhxH4jwkV2lsCujKVXrFBJutr+qQLqdeZ4Xmtc0qTjQInamGQs+OfIOXX1WN+QFwZicPiMRjqho1sZWGY9kO9SorWBYjLmyiwHxk226j9U4KZT/WLoNdeI42vbxkP3Ow9f0j8nTqgG2b8m7Zu5b5Tl43vpwkTbnZEcaZShuZRplQ7s4JseCi9rjhrbS3HukhwW7qNZKCLSYHMHA9Ujm54sOIsTreZzDbt1qv5y1Jbg8i9wQRYcBw5zPLhkpDIgsB7ye8nnItkTFXmlTCKFXgBYfifE8Z5xD2Hmbff9gM+stsafV+t/9W/7zFovKFY2BBI05G32S6THtbK4DrzDD75icPWtoeH2TGbz710MAFDhndxdVW18o+USTYC8nSUP6SNzsPRcY2hTK0c69fSHBQSLuo17N9CviOGsnuzcVVqFlFElEC2qX7BVvVF+/j7Ld4nz2XVXa2FYLSqItZGQ9YuXRlIzA8GGt7i8m27uxUwWGpYVCWWmgW7aljzJ8+7lw4CLW4ViNIwlbXKQVbkDz8jMhSxItroZebU2CagOQjvF+R8+6Uwew30NUjTjbW/tkbSy2zmJpqfd5cpcyirYWHCVlQiIgIiICIiAiIgIiIGM22jZQ6i9uPlI5icRpmblwHee6TUiWVXZFFiCUBsbjU2v5X8JMSI9s3ZVSv2nJC9wuAPDTiZB+kfZFbB06iJ1uIOJYJTspYqtszIQo42zW7x5GbmRQBYCwhlvJrbVolExuNOc9l9FGPr0wzKtFix0qEepYWPYvre+htpaSfdXcHEbLrPiGKVnFIimqHK2YlToXsB6vG82ljWqIeOnIgfCWNSpzY+0za2e9o0rGOscoFsPfs4vEnDYig1CtcgAtftKLlGGVSpsCeFpKKz2Exe2Ng0WxtHH37SIwygeu3BWY+AZh+73S4qVC3GZSvClM2ZfroPe6iSGR/CLmrU17iXb6q8P75T3GSCQERECt4vKRASwxK2Y+Osv5b4xdLwLSW+OQlLgXKnMBzNuIHiVzD2y4iBjkYEAg3BFwe8HgZisTupTxmNo16hBSmpzoeD5SWT2Zm1HMTJYnDvSJZFLoTdkFsyk6lqd9GBOuXztfhMlumUxFRrZsqAZwyOup1C9pRrpw7vOSJXszDZRmI1PDwEvYiUCIiAiIgIiICIiAiIgIiICIiAiIgIiIHl0BFiLiYHamzHHaW7L3cx+MkEQNJ7xb908Nijh2pl0RRmZCMy1G1IynRgFy8wb34y82dvPQxRy4cVKz/MWm4t4s7DKg8SffJRvp0ZYTaJaoo6iudesQCzH+tp8G89D4yH7hbo43ZO0Ctenmo1KZUVafapllZWXNzQ2D+sBx5zp1jtTceWe7RP0mux8AaSlnINV7FyPVFvVRL/JW58ySecyEuMctnPjrLeYNCInmrUVBdmCjvJAHvMD1ExjbxYQG3pNNiOSMHPuS5nn/wBQUT6qV2+rh8Rb2Epb4ydDKzxXF1PlMf8A757sNiT/AMoj/MRPFTbJsf5rieH6Mfc0D3Ex1PbNPMFZalIsbDrKbopJ0ADkZbk8r68plKNJnOVRcmQFCiXYKo1P8XktwmHFNQo5c+898+GzMAKI72PE/cPCXsiZCIiQEREBERAREQEREBERAREQEREBERAREQEREBKWlYgW+Iwivx0PeJY1dnMOBB+BmWiBCK+zK1dmNV6tKkCVSnTY0ywBtnqVE7WpBIUEC1r3J0rR3ewinN6PTZh8px1j/v1Ln4ybT5vQU8VHuk7EfRAosAAO4Cw+ErM0cDT+b8T+Mp6BT7viY2MNKOpIIAJNuWszi4OmPkj23P2z7qoHAWjYjVPYBqqVqgBGFmU63B4i3CZzZ2ASggRbmwAzMbsbc2bmZdRICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB/9k="
                description={"Page Not Found"}
            />
            <Button className='shadow-sm font-bold bg-black text-white'
            size='middle'
            >
                <Link to={'/'}>Go to Homepage</Link>
            </Button>
        </div>
    )
}

export default NotFound