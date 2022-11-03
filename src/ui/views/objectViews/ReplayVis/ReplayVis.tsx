import React from 'react';
import { Replay } from '../../../../replay';
import Value from '../../../components/Value/Value';

import './ReplayVis.css';

// A ReplayVis visualized a Replay object which is the object
// that contains references to all other object so effectively
// this is a "list of resources" view.

// Wasn't sure if this should list the fields we want to see or
// show all the fields and have an exclusion list.

const s_propertyNames = [
    'adapters',
    'bindGroupLayouts',
    'bindGroups',
    'buffers',
    'commandBuffers',
    'devices',
    'pipelineLayouts',
    'querySets',
    'queues',
    'renderPipelines',
    'samplers',
    'shaderModules',
    'textures',
    'textureViews',
];

type ObjectKey = keyof Replay;

export default function ReplayVis({ data }: { data: Replay }) {
    return (
        <div className="spector2-vis">
            <div className="spector2-replay-vis">
                {s_propertyNames.map((name, nameNdx) => {
                    const key = name as ObjectKey;
                    const resources: Record<string, any> = data[key];

                    return (
                        <div className="spector2-replay-group" key={`n${nameNdx}`}>
                            <div className="spector2-replay-heading">{name}:</div>
                            <div className="spector2-replay-resources">
                                {Object.values(resources).map((resource, ndx) => (
                                    <Value key={`r${ndx}`} data={resource} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
