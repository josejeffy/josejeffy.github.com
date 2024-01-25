let active = 'Education'

        let section = (heading, listing) => {
            return heading == active && m('div', [
                m('h3', heading),
                m('ul', listing.map(list => m('li', list)))
            ])
        }


        m.mount(app, {
            view: function () {
                return m("div", [
                    m('h1', "Jeffy Joseph"),
                    m('img', {
                        src: 'pp.jpg',
                        style: {
                            width: '200px'
                        }
                    }),
                    m('div',['Education','Experience','Skills'].map(x=>{
                        return m('button',{
                            onclick:()=>active=x,
                            style:{
                                'background-color':active==x?'black':'',
                                'color':'white'
                            }
                        },x)
                    })),
                    section('Education',[
                        'Master degree in Industrial Engineering and Management',
                        'Bachelor degree in Mechanical Engineering'
                    ]),
                    section('Experience',[
                        'System engineer (Mainframe)',
                        'Automation Engineer',
                        'Software developer',
                        'Lean officer',
                        'Lecturer'
                    ]),
                    section('Skills',[
                        'Python',
                        'Javascript',
                        'VBA'
                    ])
                ])
            }
        })